"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

interface FileUploadProps {
  onUploadSuccess?: (documentId: string) => void;
}

export default function FileUpload({ onUploadSuccess }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      setStatus({ type: "idle", message: "" });

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select a file to upload.");
      }

      const file = event.target.files[0];

      if (file.type !== "application/pdf") {
        throw new Error("Only PDF files are supported.");
      }

      if (file.size > 10 * 1024 * 1024) {
        throw new Error("File size exceeds 10MB limit.");
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from("pdfs")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("pdfs").getPublicUrl(filePath);

      const { data: dbData, error: dbError } = await supabase
        .from("documents")
        .insert([
          {
            title: file.name,
            file_name: file.name,
            file_type: file.type,
            file_url: publicUrl,
            status: "uploaded",
          },
        ])
        .select()
        .single();

      if (dbError) throw dbError;

      setStatus({
        type: "success",
        message: "Document uploaded successfully!",
      });

      if (onUploadSuccess && dbData) {
        onUploadSuccess(dbData.id);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <label className="mb-2 block text-sm font-medium text-gray-900">
        Upload Document (PDF)
      </label>
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
      />

      {uploading && (
        <p className="mt-4 animate-pulse text-sm font-medium text-blue-600">
          Uploading and indexing document...
        </p>
      )}

      {status.message && (
        <p
          className={`mt-4 text-sm font-medium ${status.type === "error" ? "text-red-600" : "text-green-600"}`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
