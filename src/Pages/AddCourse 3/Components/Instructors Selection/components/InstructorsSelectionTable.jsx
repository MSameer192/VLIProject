// react States
import React, { Component } from "react";

// images
import instructor1 from "../Assets/instructor1.png";

// css
import '../../CourseSelection/CourseSelection.css';

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="addCOurse4Table">
                <table className="addCourse4Table">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Joining Date</th>
                            <th>Under Training Clients</th>
                            <th>Total Classes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Jim Halpert</td>
                            <td>miles@gmail.com</td>
                            <td><div className="addCourse4Status">Nex Class in 23:02</div></td>
                            <td>08/08/2022</td>
                            <td><div className="addCourse4Status">3</div></td>
                            <td>12/15</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Pam Beesly</td>
                            <td>barber@yahoo.com</td>
                            <td><div className="addCourse4Status backgroudColorRed">In Class</div></td>
                            <td>26/08/2021</td>
                            <td><div className="addCourse4Status backgroudColorPurple">Free</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status backgroudColorPurple">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status backgroudColorRed">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status backgroudColorRed">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status backgroudColorPurple">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                            <td>Michael Scott</td>
                            <td>marshall@yahoo.com</td>
                            <td><div className="addCourse4Status">In Class</div></td>
                            <td>07/09/2022</td>
                            <td><div className="addCourse4Status">2</div></td>
                            <td>04/10</td>
                            <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                        </tr>
                    </tbody>
                </ table>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
