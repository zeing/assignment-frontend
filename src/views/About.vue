<template>
  <div class="container profile-content text-left">
    <div class="row">
      <div class="col-md-4">
        <div class="profile-img">
          <img src="@/assets/profile.jpg" alt=""/>
        </div>
        <br/>
        <br/>
        <div class="profile-work">
          <h5>Name</h5>
          <p>Witthawin Sirisiwaphak</p>

          <h5>About</h5>
          <label>Address: Wongsawang, Bang Sue,
            Bangkok 10800</label>
          <label>Tel: +66(0) 93 893 5956</label>
          <label>Email: zeing@outlook.com</label>
          <label>Linkedin: <a href="https://www.linkedin.com/in/witthawin" target="_blank">https://www.linkedin.com/in/witthawin</a></label>
        </div>
      </div>
      <div class="col-md-8">
        <div class="profile-work">
          <div class="row">
            <div class="col-md-12">
              <h5>Experience</h5>
            </div>
            <div class="col-md-12">
              <label> <b>Telemedica co., ltd</b> | Jul 2017 - Present</label><br/>
              <label>Full-Stack Developer</label>
            </div>
            <div class="col-md-12">
              <label> <b>SmileFOKUS (Thailand) Co., Ltd </b> | Jan - May 2017</label><br/>
              <label>Automate Tester (Part-Time)</label>
            </div>
            <div class="col-md-12">
              <label> <b>SmileFOKUS (Thailand) Co., Ltd </b> | Jun - Dec 2016</label><br/>
              <label>Full-Stack Developer (Co-operative Education)</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h5>Education</h5>
            </div>

            <div class="col-md-12">
              <label><b>BACHELOR DEGREE | 2013 – 2017 | King Mongkut’s University of Technology North Bangkok</b></label>
              <label>Department of Computer and Information Science | GPA 3.35</label>
            </div>
            <div class="col-md-12">
              <label><b>SENIOR HIGH SCHOOL | 2010 - 2013 | Trattrakarnkhun school, Trat</b></label>
              <label>Science-Mathematics | GPA 3.63</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div>
                <h5>Skills</h5>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Vue.js</li>
                <li>React **basic**</li>
                <li>Golang **basic**</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  body {
    background: -webkit-linear-gradient(left, #F03710, #FFF);
  }

  .profile-content {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
  }

  .profile-img {
    text-align: center;
  }

  .profile-img img {
    width: 70%;
    height: 100%;
    border-radius: 9999px;
  }

  .profile-head h5 {
    color: #333;

  }
  .profile-work {
    padding: 14%;
    margin-top: -15%;
  }

  .profile-work p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 10%;
  }

  .profile-work h5 {
    color: #0062cc;
  }

  .profile-work a {
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
  }
</style>
