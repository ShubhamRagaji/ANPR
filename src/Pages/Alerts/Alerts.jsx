import React, { useState } from "react";
import diycam_logo from "../../components/Images/diycam.png";
import makeinIndia from "../../components/Images/makeinindia.png";
import "./alerts.scss";
import logoutimg from "../../components/Images/logout.png";
import exit from "../../components/Images/exitImage.png";
import { NavLink } from "react-router-dom";
import img1 from "../../components/Images/ALPR_Final_Images/1.jpg";
import img2 from "../../components/Images/ALPR_Final_Images/2.jpg";
import img3 from "../../components/Images/ALPR_Final_Images/3.jpg";
import img4 from "../../components/Images/ALPR_Final_Images/4.jpg";
import img5 from "../../components/Images/ALPR_Final_Images/5.jpg";
import img6 from "../../components/Images/ALPR_Final_Images/6.jpg";
import img7 from "../../components/Images/ALPR_Final_Images/7.jpg";
import img8 from "../../components/Images/ALPR_Final_Images/8.jpg";
import img9 from "../../components/Images/ALPR_Final_Images/9.jpg";
import img10 from "../../components/Images/ALPR_Final_Images/10.jpg";
import img11 from "../../components/Images/ALPR_Final_Images/11.jpg";
import img12 from "../../components/Images/ALPR_Final_Images/12.jpg";
import img13 from "../../components/Images/ALPR_Final_Images/13.jpg";
import img14 from "../../components/Images/ALPR_Final_Images/14.jpg";
import img15 from "../../components/Images/ALPR_Final_Images/15.jpg";
import img16 from "../../components/Images/ALPR_Final_Images/16.jpg";
import img17 from "../../components/Images/ALPR_Final_Images/17.jpg";
import img18 from "../../components/Images/ALPR_Final_Images/18.jpg";
import img19 from "../../components/Images/ALPR_Final_Images/19.jpg";
import img20 from "../../components/Images/ALPR_Final_Images/20.jpg";
import img21 from "../../components/Images/ALPR_Final_Images/21.jpg";
import img22 from "../../components/Images/ALPR_Final_Images/22.jpg";
import img23 from "../../components/Images/ALPR_Final_Images/23.jpg";
import img24 from "../../components/Images/ALPR_Final_Images/24.jpg";
import img25 from "../../components/Images/ALPR_Final_Images/25.jpg";
import img26 from "../../components/Images/ALPR_Final_Images/26.jpg";
import img27 from "../../components/Images/ALPR_Final_Images/27.jpg";
import img28 from "../../components/Images/ALPR_Final_Images/28.jpg";
import img29 from "../../components/Images/ALPR_Final_Images/29.jpg";
import img30 from "../../components/Images/ALPR_Final_Images/30.jpg";
import img31 from "../../components/Images/ALPR_Final_Images/31.jpg";
import img32 from "../../components/Images/ALPR_Final_Images/32.jpg";
import img33 from "../../components/Images/ALPR_Final_Images/33.jpg";
import img34 from "../../components/Images/ALPR_Final_Images/34.jpg";
import img35 from "../../components/Images/ALPR_Final_Images/35.jpg";
import ReactImageMagnify from "react-image-magnify";

export default function Alerts() {
  const [logout, setlogout] = useState(false);
  const [image, setimage] = useState();
  const [imagepPopup, setimagepPopup] = useState(false);

  const data = [
    {
      sr_no: "1",
      time_stamp: "2021-08-19 08:44:52",
      np: "mh03ar2435".toUpperCase(),
      veh_type: "Van",
      img: img1,
    },
    {
      sr_no: "2",
      time_stamp: "2021-08-19 09:44:56",
      np: "mh47x4124".toUpperCase(),
      veh_type: "Van",
      img: img2,
    },
    {
      sr_no: "3",
      time_stamp: "2021-08-19 09:45:27",
      np: "hh47y2981".toUpperCase(),
      veh_type: "Sedan",
      img: img3,
    },
    {
      sr_no: "4",
      time_stamp: "2021-08-19 09:45:34",
      np: "mh10bf1747".toUpperCase(),
      veh_type: "Sedan",
      img: img4,
    },
    {
      sr_no: "5",
      time_stamp: "2021-08-19 09:45:44",
      np: "mh4hm3053".toUpperCase(),
      veh_type: "Big Truck",
      img: img5,
    },
    {
      sr_no: "6",
      time_stamp: "2021-08-19 09:45:47",
      np: "mh44iq3053".toUpperCase(),
      veh_type: "Big Truck",
      img: img6,
    },
    {
      sr_no: "7",
      time_stamp: "2021-08-19 09:46:05",
      np: "mh01lf1650".toUpperCase(),
      veh_type: "Sedan",
      img: img7,
    },
    {
      sr_no: "8",
      time_stamp: "2021-08-19 09:46:07",
      np: "mh01gv1869".toUpperCase(),
      veh_type: "Sedan",
      img: img8,
    },
    {
      sr_no: "9",
      time_stamp: "2021-08-19 09:46:43",
      np: "mh04ge7821".toUpperCase(),
      veh_type: "Van",
      img: img9,
    },
    {
      sr_no: "10",
      time_stamp: "2021-08-19 09:53:52",
      np: "mh02ecq102".toUpperCase(),
      veh_type: "Sedan",
      img: img10,
    },
    {
      sr_no: "11",
      time_stamp: "2021-08-19 10:24:08",
      np: "mh04gr7322".toUpperCase(),
      veh_type: "Van",
      img: img11,
    },
    {
      sr_no: "12",
      time_stamp: "2021-08-19 10:24:16",
      np: "mh43f8763".toUpperCase(),
      veh_type: "Sedan",
      img: img12,
    },
    {
      sr_no: "13",
      time_stamp: "2021-08-19 10:25:14",
      np: "mh42y2381".toUpperCase(),
      veh_type: "Unknown",
      img: img13,
    },
    {
      sr_no: "14",
      time_stamp: "2021-08-19 10:25:29",
      np: "mh462302".toUpperCase(),
      veh_type: "Sedan",
      img: img14,
    },
    {
      sr_no: "15",
      time_stamp: "2021-08-19 10:25:41",
      np: "mh01cw1434".toUpperCase(),
      veh_type: "Sedan",
      img: img15,
    },
    {
      sr_no: "16",
      time_stamp: "2021-08-19 10:25:50",
      np: "mh01wd3053".toUpperCase(),
      veh_type: "Big truck",
      img: img16,
    },
    {
      sr_no: "17",
      time_stamp: "2021-08-19 10:26:11",
      np: "wh10u21747".toUpperCase(),
      veh_type: "Sedan",
      img: img17,
    },
    {
      sr_no: "18",
      time_stamp: "2021-08-19 10:26:20",
      np: "mh43ad5010".toUpperCase(),
      veh_type: "Sedan",
      img: img18,
    },
    {
      sr_no: "19",
      time_stamp: "2021-08-19 15:20:15",
      np: "mh47y7981".toUpperCase(),
      veh_type: "Sedan",
      img: img19,
    },
    {
      sr_no: "20",
      time_stamp: "2021-08-19 15:20:56",
      np: "mh438100".toUpperCase(),
      veh_type: "Unknown",
      img: img20,
    },
    {
      sr_no: "21",
      time_stamp: "2021-08-19 15:21:09",
      np: "mh03gp2435".toUpperCase(),
      veh_type: "Unknown",
      img: img21,
    },
    {
      sr_no: "22",
      time_stamp: "2021-08-19 15:22:02",
      np: "mh43f9763".toUpperCase(),
      veh_type: "Sedan",
      img: img22,
    },
    {
      sr_no: "23",
      time_stamp: "2021-08-19 15:22:51",
      np: "mh04hr3053".toUpperCase(),
      veh_type: "Unknown",
      img: img23,
    },
    {
      sr_no: "24",
      time_stamp: "2021-08-19 15:24:02",
      np: "mh04hd5307".toUpperCase(),
      veh_type: "Van",
      img: img24,
    },
    {
      sr_no: "25",
      time_stamp: "2021-08-19 15:24:22",
      np: "03gr4435".toUpperCase(),
      veh_type: "Van",
      img: img25,
    },
    {
      sr_no: "26",
      time_stamp: "2021-08-19 15:24:45",
      np: "mh01cv1888".toUpperCase(),
      veh_type: "Sedan",
      img: img26,
    },
    {
      sr_no: "27",
      time_stamp: "2021-08-19 15:24:59",
      np: "br06bu7822".toUpperCase(),
      veh_type: "Big Truck",
      img: img27,
    },
    {
      sr_no: "28",
      time_stamp: "2021-08-19 15:26:08",
      np: "mh01hd0511".toUpperCase(),
      veh_type: "Sedan",
      img: img28,
    },
    {
      sr_no: "29",
      time_stamp: "2021-08-19 15:27:15",
      np: "mh43ad861".toUpperCase(),
      veh_type: "Sedan",
      img: img29,
    },
    {
      sr_no: "30",
      time_stamp: "2021-08-19 15:27:28",
      np: "mi47y465".toUpperCase(),
      veh_type: "Big Truck",
      img: img30,
    },

    {
      sr_no: "31",
      time_stamp: "2021-08-19 15:29:35",
      np: "mh02ec0102".toUpperCase(),
      veh_type: "Sedan",
      img: img31,
    },
    {
      sr_no: "32",
      time_stamp: "2021-08-19 15:29:49",
      np: "mh47y2381".toUpperCase(),
      veh_type: "Unknown",
      img: img32,
    },
    {
      sr_no: "33",
      time_stamp: "2021-08-19 15:30:01",
      np: "dh05gh2485".toUpperCase(),
      veh_type: "Big Truck",
      img: img33,
    },
    {
      sr_no: "34",
      time_stamp: "2021-08-19 15:30:14",
      np: "mh46".toUpperCase(),
      veh_type: "Sedan",
      img: img34,
    },
    {
      sr_no: "35",
      time_stamp: "2021-08-19 15:30:39",
      np: "mh43y3763".toUpperCase(),
      veh_type: "Sedan",
      img: img35,
    },
  ];

  return (
    <div className="Alerts">
      <div className="alert">
        <img src={diycam_logo} alt="diycam_logo" className="diycam_logo" />
        <p>ANPR Detections</p>
        <img src={makeinIndia} alt="makeinIndia" className="makeinIndia" />
      </div>
      <div className="btn">
        <div></div>
        <button className="logout bounceInDown" onClick={() => setlogout(true)}>
          Logout
        </button>
      </div>

      {logout && (
        <div className="LogoutPopup">
          <div className="Logout bounceInDown">
            <img src={logoutimg} alt="logout" className="logout_img" />
            <p>Are you sure you want to Logout?</p>
            <div className="yes-no">
              <NavLink to="/">
                <button className="yes-btn">Yes</button>
              </NavLink>
              <button className="no-btn" onClick={() => setlogout(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="alerts-table fadeInDown">
        <table>
          <tr>
            <th>Serial No.</th>
            <th>Time Stamp</th>
            <th>Number Plate</th>
            <th>Vehicle Type</th>
            <th>Images</th>
          </tr>

          {data.map((data) => (
            <tr>
              <td>{data.sr_no}</td>
              <td>{data.time_stamp}</td>
              <td>{data.np}</td>
              <td>{data.veh_type}</td>
              <td>
                <img
                  src={data.img}
                  alt="detected_img"
                  className="detected_img"
                  onClick={() => {
                    setimage(data.img);
                    setimagepPopup(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>

      {imagepPopup && (
        <div className="image_popup">
          <div className="overlay" onClick={() => setimagepPopup(false)} />
          <div className="im-popup">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "detected_img",
                  isFluidWidth: true,
                  src: image,
                },
                largeImage: {
                  src: image,
                  width: 2000,
                  height: 2000,
                },
              }}
            />
            {/* <img src={image} alt="detected_img" className="detected_popupimg" /> */}
            <img
              src={exit}
              alt="exit"
              className="exit"
              onClick={() => setimagepPopup(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
