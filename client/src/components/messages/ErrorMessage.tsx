const ErrorMessage = ({ message }: { message: string }) => (
  <div className="container text-center mt-5">
    <div className="alert alert-danger fw-bold" role="alert">
      {message}
    </div>
  </div>
);

export default ErrorMessage;
