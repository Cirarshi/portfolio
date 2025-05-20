// src/components/DownloadButton.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function DownloadButton({
  filePath,
  fileName = "download.pdf",
  label = "Download PDF",
  color = "primary",
}) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      className={`btn btn-outline-${color} btn-sm w-auto rounded-pill shadow d-flex align-items-center gap-2 px-3`}
      onClick={handleDownload}
    >
      <i className="bi bi-download"></i>
      {label}
    </button>
  );
}

export default DownloadButton;
