import React from "react";
import Event from "./Event";


const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
            
                <tr>
                    <td className="time">8am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">9am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">10am</td>
                    <td></td>
                    <td></td>
                    <Event event="CS 440 class" color="blue " location="3201 S State St"/>
                    <Event event="CS 450 class" color="pink " location="3201 S State St"/>
                    <Event event="CS 440 class" color="blue " location="3201 S State St"/>
                    <Event event="CS 450 class" color="pink " location="3201 S State St"/>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">11am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">12pm</td>
                    <td></td>
                    <td></td>
                    <Event event="Phys 221 class" color="green " location="3201 S State St" />
                    <td></td>
                    <Event event="Phys 221 class" color="green " location="3201 S State St" />
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">1pm</td>
                    <Event event="Getaway" color="green " location="Michigan" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">2pm</td>
                    <Event event="Getaway" color="green " location="Michigan" />
                    <td></td>
                    <Event event="OTS Work" color="pink " location="Galvin Library" />
                    <td></td>
                    <Event event="OTS Work" color="pink "location="Galvin Library" />
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">3pm</td>
                    <Event event="Getaway" color="green " location="Michigan" />
                    <Event event="Psyc Class " color = "green" location="3201 S State St" />
                    <Event event="OTS Work" color="pink " location="Galvin Library"/>
                    <Event event="Psyc Class " color = "green" location="3201 S State St"/>
                    <Event event="OTS Work" color="pink " location="Galvin Library"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">4pm</td>
                    <Event event="Getaway" color="green " location="Michigan" />
                    <td></td>
                    <Event event="OTS Work" color="pink " location="Galvin Library" />
                    <td></td>
                    <Event event="OTS Work" color="pink " location="Galvin Library" />
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">5pm</td>
                    <Event event="Getaway" color="green " location="Michigan" />
                    <td></td>
                    <Event event="OTS Work" color="pink " location="Galvin Library"/>
                    <td></td>
                    <Event event="OTS Work" color="pink " location="Galvin Library"/>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;