export const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "50px",
        
      }}
    > <div>
       <h1 style={{ color: "red" }}>404</h1>
    </div>
     
      <div>
        <p style={{ color: "red" }}>Page not found</p>
      </div>
    </div>
  );
};
