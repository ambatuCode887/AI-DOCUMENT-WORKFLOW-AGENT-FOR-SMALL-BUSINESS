# AI Document Workflow Agent for Small Businesses - Project Plan

## 1. Project Goal

Build and deploy a production-style AI document workflow web app for small businesses.

The app should let a user upload business documents, ask questions with source citations, extract structured information, generate summaries and action items, and export useful results. The goal is to create a portfolio-worthy project that demonstrates practical AI engineering, not just a basic chatbot.

## 2. Portfolio Positioning

Resume headline:

> Built and deployed an AI document workflow agent for small businesses using retrieval-augmented generation, document parsing, structured extraction, source citations, and an evaluation workflow.

What this project should prove:

- Ability to build a real end-to-end AI application.
- Ability to use RAG responsibly with citations and grounded answers.
- Ability to design useful workflows around documents, not only chat.
- Ability to deploy a working product.
- Ability to explain architecture, tradeoffs, and evaluation clearly.

## 3. Target User

Small business owners, freelancers, operations assistants, or admin teams who deal with documents such as:

- Invoices
- Contracts
- Policies
- Client onboarding documents
- Proposals
- Reports
- Internal SOPs

## 4. Core Problem

Small businesses often store important information inside messy PDF or document files. They need a faster way to understand documents, extract key details, find answers, and turn document content into action.

## 5. MVP Scope

The first version should be intentionally focused.

features:

1. Upload PDF documents.
2. Parse document text.
3. Store uploaded documents and chunks.
4. Ask questions about uploaded documents.
5. Return answers with source citations.
6. Generate a document summary.
7. Extract key fields into structured JSON.
8. Generate action items from the document.
9. Export summary or extracted data.
10. Deploy the app publicly.

Out of scope for MVP:

- Full multi-tenant organization billing.
- Complex permissions.
- Real email integration.
- Automatic document signing.
- Advanced workflow automation.
- Mobile app.

## 6. Recommended Tech Stack

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:

- Next.js API routes or FastAPI
- Start with Next.js API routes for simpler deployment unless the backend becomes complex.

AI:

- OpenAI API for chat, extraction, and summarization.
- Embeddings for document search.

Database and Storage:

- Supabase Postgres
- pgvector for vector search
- Supabase Auth, optional for MVP
- Supabase Storage, optional for uploaded files

Document parsing:

- pypdf, pdf-parse, or a similar parser for MVP.
- Later upgrade to a stronger parser if needed.

Deployment:

- Vercel for the web app
- Supabase for database and storage

Testing and evaluation:

- Small hand-built document test set
- Answer groundedness checks
- Extraction accuracy checks

## 7. High-Level Architecture

User uploads PDF

-> App stores file metadata

-> Parser extracts text

-> Text is chunked

-> Chunks are embedded

-> Embeddings are stored in pgvector

-> User asks a question

-> App retrieves relevant chunks

-> LLM generates answer using retrieved context

-> App displays answer with citations

-> User can generate summary, extract fields, or create action items

## 8. Main User Flows

### Flow 1: Upload Document

1. User opens dashboard.
2. User uploads a PDF.
3. App shows upload status.
4. App parses and indexes the document.
5. User sees the document in the document list.

### Flow 2: Ask Questions

1. User selects a document.
2. User asks a question.
3. App retrieves relevant chunks.
4. AI answers with citations.
5. User can inspect the cited source text.

### Flow 3: Generate Summary

1. User selects a document.
2. User clicks summarize.
3. App generates an executive summary.
4. Summary includes key points, risks, dates, and next steps.

### Flow 4: Extract Fields

1. User selects a document.
2. User chooses extraction type, such as invoice, contract, or policy.
3. AI extracts structured fields.
4. App displays editable JSON/table output.
5. User exports results.

### Flow 5: Generate Action Items

1. User selects a document.
2. User clicks generate action items.
3. AI identifies tasks, owners if mentioned, dates, and priority.
4. User can export action items.

## 9. Data Model Draft

### users

- id
- email
- created_at

### documents

- id
- user_id
- title
- file_name
- file_type
- file_url
- status
- created_at

### document_chunks

- id
- document_id
- chunk_index
- content
- page_number
- embedding
- created_at

### ai_runs

- id
- user_id
- document_id
- run_type
- input
- output
- model
- token_count
- created_at

### extraction_results

- id
- document_id
- extraction_type
- result_json
- created_at

## 10. Suggested UI Screens

1. Dashboard
   - Document list
   - Upload button
   - Recent AI runs

2. Document Detail
   - Document title
   - Summary panel
   - Chat panel
   - Citations/source viewer
   - Actions panel

3. Extraction View
   - Extraction type selector
   - Structured fields table
   - JSON preview
   - Export button

4. Evaluation/Admin View
   - Test questions
   - Expected answers
   - Actual answers
   - Pass/fail status
   - Notes

## 11. Build Phases

### Phase 1: Project Setup

Goal: Create the basic deployable app shell.

Tasks:

- Initialize Next.js project.
- Add TypeScript and Tailwind CSS.
- Create basic layout.
- Add dashboard page.
- Add document detail page placeholder.
- Configure environment variables.
- Create README.

Deliverable:

- App runs locally.
- Basic UI is visible.

### Phase 2: Document Upload and Storage

Goal: Let users upload a PDF and store document metadata.

Tasks:

- Add upload UI.
- Add backend upload endpoint.
- Store document metadata in database.
- Show upload status.
- Show uploaded documents in dashboard.

Deliverable:

- User can upload a document and see it listed.

### Phase 3: Document Parsing and Chunking

Goal: Extract text from PDFs and split it into searchable chunks.

Tasks:

- Add PDF text extraction.
- Create chunking function.
- Store chunks with page references.
- Display parsed text preview for debugging.

Deliverable:

- Uploaded PDFs become searchable text chunks.

### Phase 4: Embeddings and Retrieval

Goal: Enable semantic search over document chunks.

Tasks:

- Generate embeddings for chunks.
- Store embeddings in pgvector.
- Create retrieval function.
- Test retrieval with sample questions.

Deliverable:

- App can return relevant document chunks for a user question.

### Phase 5: Question Answering with Citations

Goal: Build the core RAG experience.

Tasks:

- Create chat UI.
- Add question-answer API endpoint.
- Retrieve relevant chunks.
- Generate answer using retrieved context.
- Include citations with page/chunk references.
- Display cited source snippets.

Deliverable:

- User can ask questions and get grounded answers with citations.

### Phase 6: Summary, Extraction, and Action Items

Goal: Move beyond chatbot into workflow value.

Tasks:

- Add summary generation.
- Add structured extraction prompts.
- Add action item generation.
- Display outputs in polished panels.
- Add export to Markdown, CSV, or JSON.

Deliverable:

- App helps users understand and act on documents.

### Phase 7: Evaluation Harness

Goal: Show that the AI system is tested, not just demoed.

Tasks:

- Create sample documents.
- Create test questions and expected answers.
- Add evaluation script or page.
- Track citation presence and answer quality.
- Track extraction accuracy for known fields.

Deliverable:

- Project includes measurable AI quality checks.

### Phase 8: Deployment

Goal: Make the project public and portfolio-ready.

Tasks:

- Deploy app to Vercel.
- Configure Supabase production database.
- Add production environment variables.
- Test full workflow in production.
- Add demo data.

Deliverable:

- Public deployed app URL.

### Phase 9: Portfolio Polish

Goal: Make the project shine to recruiters and hiring managers.

Tasks:

- Improve README.
- Add architecture diagram.
- Add screenshots or demo GIF.
- Add limitations and future improvements.
- Add resume bullet points.
- Write short case study.

Deliverable:

- GitHub repo and deployed app are portfolio-ready.

## 12. Suggested Folder Structure

```text
ai-document-workflow-agent/
  app/
    dashboard/
    documents/[id]/
    api/
  components/
    upload/
    documents/
    chat/
    extraction/
    layout/
  lib/
    ai/
    db/
    documents/
    retrieval/
    evaluation/
  scripts/
  supabase/
  public/
  README.md
```

## 13. MVP Success Criteria

The MVP is complete when:

- A user can upload a PDF.
- The app extracts and chunks the document text.
- The app stores document chunks and embeddings.
- The user can ask questions and receive cited answers.
- The user can generate a summary.
- The user can extract structured fields.
- The user can generate action items.
- The app is deployed and usable from a public URL.
- The README explains the architecture and tradeoffs.

## 14. Stretch Features

Add these only after the MVP works:

- User authentication.
- Multiple workspaces.
- OCR for scanned PDFs.
- Document comparison.
- Risk detection for contracts.
- Invoice-specific extraction mode.
- Email import.
- Slack or Notion export.
- Human approval workflow.
- Cost dashboard.
- More formal evaluation metrics.

## 15. Risks and Mitigations

Risk: PDF parsing is unreliable.

Mitigation: Start with clean PDFs, then document limitations. Add OCR later.

Risk: AI answers hallucinate.

Mitigation: Require retrieved context, show citations, and refuse unsupported answers.

Risk: Scope becomes too large.

Mitigation: Build only one polished document workflow first.

Risk: Deployment becomes complicated.

Mitigation: Use Vercel and Supabase for the first version.

Risk: Project looks like a generic chatbot.

Mitigation: Emphasize structured extraction, action items, citations, evaluation, and deployment.

## 16. Resume Bullets Draft

- Built and deployed an AI document workflow web app that ingests PDFs, performs retrieval-augmented question answering with source citations, and generates summaries, structured extractions, and action items.
- Implemented document parsing, chunking, embedding generation, vector search, and grounded response generation using OpenAI models and pgvector.
- Designed an evaluation workflow to test answer groundedness, citation coverage, and structured extraction accuracy on sample business documents.
- Created a production-style full-stack application with Next.js, TypeScript, Supabase, and Vercel.

## 17. First Practical Next Step

Start with Phase 1.

Immediate tasks:

1. Initialize the Next.js project in this folder.
2. Create the first dashboard layout.
3. Add a clean README with the project vision.
4. Run the app locally.
5. Commit the initial project setup.

## 18. Working Rule

Build one small complete slice at a time.

Preferred order:

1. App shell.
2. Upload UI.
3. Parse one PDF.
4. Store chunks.
5. Ask one cited question.
6. Add summaries.
7. Add extraction.
8. Add action items.
9. Add evaluation.
10. Deploy.

Phase 1: Project Setup
Goal: Create the app foundation.

Tasks:

Initialize Next.js project in the project folder.
Add TypeScript, Tailwind CSS, ESLint.
Set up folder structure: app, components, lib, supabase, scripts.
Create basic pages:
Dashboard
Document detail page
Upload page/area
Add environment variable template.
Create initial README.md.
Deliverable: app runs locally with a clean UI shell.

Phase 2: UI Shell and Product Layout
Goal: Make the app look like a real business tool.

Tasks:

Build main dashboard layout.
Add sidebar/top navigation.
Add document list section.
Add upload button.
Add empty states.
Add document detail layout with panels:
Summary
Chat
Sources
Extraction
Action items
Make it responsive for laptop and mobile.
Deliverable: polished clickable interface, even before AI works.

Phase 3: Supabase Setup
Goal: Add database, storage, and later vector support.

Tasks:

Create Supabase project.
Add tables:
documents
document_chunks
ai_runs
extraction_results
Enable pgvector.
Create storage bucket for uploaded PDFs.
Add Supabase client to the app.
Add database types if needed.
Deliverable: app can connect to Supabase and read/write basic records.

Phase 4: Document Upload
Goal: Let users upload PDF documents.

Tasks:

Build upload component.
Validate file type and size.
Upload file to Supabase Storage.
Save document metadata to documents.
Show upload progress/status.
Show uploaded documents on dashboard.
Deliverable: user can upload a PDF and see it listed.

Phase 5: PDF Parsing
Goal: Extract text from uploaded documents.

Tasks:

Add PDF parser.
Extract raw text from uploaded PDF.
Capture page numbers if possible.
Handle errors for bad PDFs.
Store parsing status: uploaded, processing, ready, failed.
Add debug preview for extracted text.
Deliverable: uploaded PDFs become usable text.

Phase 6: Chunking
Goal: Split document text into searchable pieces.

Tasks:

Create chunking function.
Split text by page/paragraph/length.
Add overlap between chunks.
Save chunks to document_chunks.
Store chunk index and page number.
Test with 2-3 sample documents.
Deliverable: each document has clean searchable chunks.

Phase 7: Embeddings and Vector Search
Goal: Make document content semantically searchable.

Tasks:

Generate embeddings for each chunk using OpenAI.
Store embeddings in Supabase pgvector.
Create SQL function for similarity search.
Given a user question, embed the question.
Retrieve top matching chunks.
Test retrieval quality manually.
Deliverable: app can find relevant chunks for a question.

Phase 8: RAG Question Answering
Goal: Build the main AI feature.

Tasks:

Create question input/chat UI.
Send question to backend route.
Retrieve relevant chunks.
Pass chunks into the LLM as context.
Generate answer.
Require the model to cite sources.
Display answer with page/chunk citations.
Show source snippets.
Deliverable: user can ask questions and get grounded answers with citations.

Phase 9: Document Summary
Goal: Add high-value workflow output.

Tasks:

Add “Generate Summary” button.
Retrieve the most important chunks or use full document text if small.
Generate:
executive summary
key dates
important people/companies
risks
next steps
Save summary output in ai_runs.
Display summary in the document page.
Deliverable: user gets a useful business summary.

Phase 10: Structured Extraction
Goal: Show this is more than a chatbot.

Tasks:

Add extraction modes:
invoice
contract
policy/general document
Create JSON schemas for each mode.
Ask AI to extract structured fields.
Validate returned JSON.
Display as table and JSON.
Save extraction result.
Add export to JSON/CSV.
Deliverable: app turns messy documents into structured data.

Phase 11: Action Item Generation
Goal: Turn document understanding into next steps.

Tasks:

Add “Generate Action Items” button.
Extract tasks, due dates, owners, risks, and priorities.
Display as editable task list.
Let user mark items as done.
Export action items as Markdown/CSV.
Deliverable: user can act on document insights.

Phase 12: Evaluation
Goal: Make the project look serious to employers.

Tasks:

Create sample document set.
Create test questions.
Define expected answers.
Run retrieval tests.
Check whether answers include citations.
Check structured extraction accuracy.
Add simple evaluation page or script.
Document evaluation results in README.
Deliverable: project proves AI quality, not just AI output.

Phase 13: Auth and User Data
Goal: Make the app safe for public deployment.

Tasks:

Add Supabase Auth.
Add login/sign-up.
Link documents to users.
Protect dashboard routes.
Add row-level security policies.
Make sure users only see their own files.
Deliverable: public demo supports real accounts safely.

Phase 14: Deployment
Goal: Put the app online.

Tasks:

Push project to GitHub.
Deploy Next.js app to Vercel.
Add production environment variables.
Connect Supabase production project.
Test upload, parsing, RAG, summary, extraction, and export in production.
Fix deployment-specific bugs.
Deliverable: live public app URL.

Phase 15: Portfolio Polish
Goal: Make it shine for resume/interviews.

Tasks:

Add strong README.
Add screenshots.
Add architecture diagram.
Add demo workflow.
Add “technical decisions” section.
Add “limitations and future improvements.”
Add resume bullets.
Optional: create short demo video/GIF.
Deliverable: project is ready for GitHub, LinkedIn, resume, and interviews.
