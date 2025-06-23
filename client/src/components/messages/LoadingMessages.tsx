const LoadingMessage = ({ message }: { message: string }) => (
  <div className="container text-center mt-5">
    <div className="spinner-border text-primary" role="status" />
    <p className="mt-2 fw-bold">{message}</p>
  </div>
);

export default LoadingMessage;