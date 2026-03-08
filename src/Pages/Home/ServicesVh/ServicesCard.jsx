import React from "react";
import styled from "styled-components";

const ServicesCard = (props) => {
  return (
    <StyledWrapper>
      <div className="card  ">
        <div className="content ">

          {/* BACK SIDE */}
          <div className="back">
            <div className="back-content">
              <img src={props.img} alt="" width="60" />
              <strong>{props.head}</strong>
            </div>
          </div>

          {/* FRONT SIDE */}
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>

            <div className="front-content">
              <small className="badge">Service</small>

              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>{props.head}</strong>
                  </p>
                </div>

                <p className="card-footer">
                  {props.para}
                </p>

                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

.card{
  width:350px;
  height:350px;
  perspective:1000px;
}

.content{
  width:100%;
  height:100%;
  position:relative;
  transform-style:preserve-3d;
  transition:transform 0.6s;
  border-radius:8px;
  box-shadow:0 0 10px rgba(0,0,0,0.8);
}

.card:hover .content{
  transform:rotateY(180deg);
}

.front,
.back{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:8px;
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
}

.front{
  transform:rotateY(180deg);
  background:#151515;
  color:white;
}

.back{
  transform:rotateY(0deg);
  display:flex;
  justify-content:center;
  align-items:center;
  background:#151515;
  overflow:hidden;
}

/* glowing border */

.back::before{
  content:"";
  position:absolute;
  width:180px;
  height:180%;
  background:linear-gradient(
    90deg,
    transparent,
    #20c997,
    #20c997,
    transparent
  );
  animation:borderRotate 4s linear infinite;
}

.back-content{
  position:absolute;
  width:96%;
  height:96%;
  background:#151515;
  border-radius:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:12px;
  color:white;
}

/* animation */

@keyframes borderRotate{
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
}

.front-content{
  position:absolute;
  bottom:0;
  width:100%;
  padding:15px;
}

.description{
  background:#00000099;
  padding:10px;
  border-radius:6px;
  backdrop-filter:blur(5px);
}

.badge{
  background:#00000055;
  padding:3px 10px;
  border-radius:10px;
  width:fit-content;
}

.card-footer{
  color:#ffffff88;
  margin-top:5px;
  font-size:12px;
}

.btn{
  margin-top:10px;
  padding:6px 12px;
  border:none;
  background:#20c997;
  color:white;
  border-radius:5px;
  cursor:pointer;
}

.img{
  position:absolute;
  width:100%;
  height:100%;
}

.circle{
  width:90px;
  height:90px;
  border-radius:50%;
  background:#ffbb66;
  position:relative;
  filter:blur(15px);
  animation:floating 2600ms infinite linear;
}

#bottom{
  background:#ff8866;
  left:50px;
  width:150px;
  height:150px;
  animation-delay:-800ms;
}

#right{
  background:#ff2233;
  left:160px;
  top:-80px;
  width:30px;
  height:30px;
  animation-delay:-1800ms;
}

@keyframes floating{
  0%{
    transform:translateY(0);
  }
  50%{
    transform:translateY(10px);
  }
  100%{
    transform:translateY(0);
  }
}

`;

export default ServicesCard;