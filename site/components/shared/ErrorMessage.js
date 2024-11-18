export default function ErrorMessage({ message }) {
    return (
      <div className="text-center p-8">
        <i className="bi bi-exclamation-circle text-2xl text-red-500 mb-2"></i>
        <p className="text-neutral-600 dark:text-neutral-300">{message}</p>
      </div>
    )
  }