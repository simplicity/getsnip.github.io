import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function Contact() {
  return (
    <Layout title="Contact" description="How to get in touch">
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
        <h2>Contact</h2>
        <ul>
          <li>
            You can use{" "}
            <Link to="https://forms.gle/vhWV3o8T5VuQ2iyV6">this form</Link> for
            private inquiries
          </li>
          <li>
            You can join us on{" "}
            <Link to="https://github.com/simplicity/snip/discussions">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
