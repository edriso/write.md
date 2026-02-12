import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ markdown }) {
  return (
    <div className="prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
