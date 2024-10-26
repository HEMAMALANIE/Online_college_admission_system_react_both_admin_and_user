// import React from 'react'

const Course = () => {
  return (
    <div className="row">
    <div className="col-1"></div>
    <div className="col-10">
        <div className="d-flex justify-content-end gap-2">
            <button className="add_course px-4 py-2 rounded-pill">Add UG Course</button>
            <button className="add_course px-4 py-2 rounded-pill">Add PG COurse</button>
        </div>
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">UG Courses</th>
                  <th scope="col">Total Seats</th>
                  <th scope="col">Seats Filled</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="table_body">
                <tr>
                  <th scope="row">1</th>
                  <td>B.E. Computer Science Engineering</td>
                  <td>120</td>
                  <td>52</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>B.Tech. Information Technology</td>
                  <td>60</td>
                  <td>53</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>B.Tech. Artificial Intelligence & Data Science</td>
                  <td>60</td>
                  <td>52</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>B.E. Electrical & Electronics Engineering</td>
                  <td>60</td>
                  <td>22</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>B.E. Mechanical Engineering</td>
                  <td>60</td>
                  <td>52</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>B.E. Electronics & Communication Engineering</td>
                  <td>60</td>
                  <td>12</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
               
               
              </tbody>
        </table>

        <table className="table table-striped mt-4">
            <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">PG Courses</th>
                  <th scope="col">Total Seats</th>
                  <th scope="col">Seats Filled</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="table_body">
                <tr>
                  <th scope="row">1</th>
                  <td>M.E. Computer Science and Engineering</td>
                  <td>18</td>
                  <td>2</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>M.E. Applied Electronics</td>
                  <td>18</td>
                  <td>5</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Master of Business Administration</td>
                  <td>60</td>
                  <td>32</td>
                  <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger ms-2">Delete</button></td>
                </tr>
               
               
              </tbody>
        </table>
    </div>
    <div className="col-1"></div>
</div>
  )
}

export default Course