export default function Blog() {
  return (
    <main
      style={{
        maxWidth: "992px",
        margin: "0 auto",
      }}
    >
      <h1 className="p-4 text-center">Questions & Answers</h1>

      <div className="p-4 pt-0">
        <h2>
          Differences between <code>javascript</code> and <code>nodejs</code>
        </h2>

        <p>
          <code>Authorization</code> means authorizing or giving someone power
          to access private or secure things. And <code>authentication</code>{" "}
          means authenticating or verifying someone that what they are saying
          about them is true.
        </p>

        <h2>
          When should you use <code>nodejs</code> and when should you use{" "}
          <code>mongodb</code>
        </h2>

        <p>
          I am using <code>firebase</code> because it is one of the best tools
          out there to implement authentication in applications. It is easy to
          use and it is very powerful. There are many other good options
          available too, such as, <code>Supabase</code>,{" "}
          <code>Passport JS</code>, <code>Auth0</code>, <code>Okta</code>,{" "}
          <code>Amazon Cognito</code> etc.
        </p>

        <h2>
          Differences between <code>sql</code> and <code>nosql</code> databases
        </h2>

        <p>
          Firebase provides other services such as, <code>Firestore</code>,{" "}
          <code>Hosting</code>, <code>Cloud Messaging</code>,{" "}
          <code>Cloud Functions</code>, <code>Firebase ML</code>, etc. other
          than authentication.
        </p>

        <h2>
          What is the purpose of <code>jwt</code> and how does it work
        </h2>

        <p>
          Firebase provides other services such as, <code>Firestore</code>,{" "}
          <code>Hosting</code>, <code>Cloud Messaging</code>,{" "}
          <code>Cloud Functions</code>, <code>Firebase ML</code>, etc. other
          than authentication.
        </p>
      </div>
    </main>
  );
}
