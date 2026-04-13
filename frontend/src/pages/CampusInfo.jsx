import Layout from "../components/Layout";

export default function CampusInfo() {
  return (
    <Layout>
      <h2>Campus Information</h2>

      <div className="row">

        <div className="col-md-3">
          <div className="card p-3">
            <h5>🍽 Canteen</h5>
            <p>Menu: Pizza, Sandwich, Tea</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h5>🚗 Parking</h5>
            <p>Available near Gate 2</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h5>🏫 Buildings</h5>
            <p>Block A, B, C</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h5>⚽ Sports</h5>
            <p>Cricket, Football Ground</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}