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
          Javascript is the primary programming language for the web. It runs in
          a browser engine that has been written to execute it. Whereas, Node.js
          is an asynchronous event-driven JavaScript Runtime where JS code can
          be executed. It allows running JS outside a browser.
        </p>

        <h2>
          When should you use <code>nodejs</code> and when should you use{" "}
          <code>mongodb</code>
        </h2>

        <p>
          Node.js is a JavaScript runtime and MongoDB is a NoSQL database. They
          aren't related. You should use Node.js if you want create an efficent
          server using JavaScript. And you should use MongoDB if you want to
          store data in an optimized NoSQL database. And it's perfectly okay to
          use both of them together.
        </p>

        <h2>
          Differences between <code>sql</code> and <code>nosql</code> databases
        </h2>

        <p>
          SQL databases are relational databases and NoSQL databases are
          non-relational databases. Data is stored in a structured format in an
          SQL database. And NoSQL stores data in an unstructured format and lets
          the developer choose how they want to manage it. SQL databases are
          generally recommended for enterprise grade applications. And NoSQL
          databases are for setting up and managing databases quickly and
          easily.
        </p>

        <h2>
          What is the purpose of <code>jwt</code> and how does it work
        </h2>

        <p>
          JWT is an open standard for securely transmitting data between parties
          as a JSON object. This information is digitally signed. So, it works
          by verifying the signature and if it's valid, only then the user gets
          permission to add, remove or change data.
        </p>
      </div>
    </main>
  );
}
