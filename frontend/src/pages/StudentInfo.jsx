import Layout from "../components/Layout";

export default function StudentInfo() {
  return (
    <Layout>
      <h2>Student Information</h2>

      <div className="card p-3">
        <p>Name: John Doe</p>
        <p>Email: student@gmail.com</p>
        <p>Course: BCA</p>
      </div>
    </Layout>
  );
}