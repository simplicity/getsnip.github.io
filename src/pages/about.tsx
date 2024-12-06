import Layout from "@theme/Layout";

export default function About(): JSX.Element {
  return (
    <Layout title="About" description="About the Snip Note Taking App">
      <div
        // NOTE: necessary hack. otherwise, layout gets completely messed up.
        style={{
          width: "100%",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>About</h2>
        Snip is a free to use, cross-platform productivity app developed by a
        small indie dev team in Frauenfeld, Switzerland.
      </div>
    </Layout>
  );
}
