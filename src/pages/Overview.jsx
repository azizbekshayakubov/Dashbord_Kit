import Search from "../assets/images/search.svg"
import Note from "../assets/images/new.svg"
import NavbarLogo from "../assets/images/photo.svg"
import "../container/overview.scss"



  const Overview = ()=>{
    return(
         
      <>
      <div className="overvie_wrapper">
      <div className="navbar">

        <h2 className="navbar_title">Overview</h2>

        <div className="navbar_right">
          <img className="search" src={Search} alt="Search" />
          <img className="note" src={Note} alt="Note" />
          <p className="jones">Jones Ferdinand</p>
          <img src={NavbarLogo} alt="Navbar logo" />
          </div>
        
      </div><div className="overview">
          <div className="overview__cards">
            <div className="overview__card">
              <p className="card__title">Unresolved</p>
              <h1 className="number">60</h1>
            </div>
            <div className="overview__card">
              <p className="card__title">Overdue</p>
              <h1 className="number">16</h1>
            </div>
            <div className="overview__card">
              <p className="card__title">Open</p>
              <h1 className="number">43</h1>
            </div>
            <div className="overview__card">
              <p className="card__title">On hold</p>
              <h1 className="number">64</h1>
            </div>
          </div>
          <div className="overview_trends">
            <div className="trends_left">
              <h3 className="trends_left__title">Today’s trends</h3>
              <div className="trends_left__subtitle">
                <p>as of 25 May 2019, 09:41 PM</p>
                <span>

                  <p className="today">----Today</p>

                  <p>----Yesterday</p>
                </span>
              </div>
            </div>
            <div className="right">
              <div className="overview__box">
                <p className="box__title">Resolved</p>
                <span className="box__number">449</span>
              </div>
              <div className="overview__box">
                <p className="box__title">Resolved</p>
                <span className="box__number">426</span>
              </div>
              <div className="overview__box">
                <p className="box__title">Average first response time</p>
                <span className="box__number">33m</span>
              </div>
              <div className="overview__box">
                <p className="box__title">Average response time</p>
                <span className="box__number">3h 8m</span>
              </div>
              <div className="overview__box">
                <p className="box__title">Resolution within SLA</p>
                <span className="box__number">94%</span>
              </div>
            </div>
          </div>
          <div className="overview_bottom">
            <div className="bottom_left">
              <div className="bottom_title">
                <h1>Unresolved tickets</h1>

                <p>View details</p>
              </div>
              <div className="bottem_content">
                <h2>Waiting on Feature Request</h2>
                <p>4238</p>
              </div>
              <div className="bottem_content">
                <h2>Awaiting Customer Response</h2>
                <p>1005</p>
              </div>
              <div className="bottem_content">
                <h2>Awaiting Developer Fix</h2>
                <p>914</p>

              </div>
              <div className="bottem_content">
                <h2>Pending</h2>
                <p>281</p>
              </div>







            </div>
            <div className="bottom_right">
              <div className="bottom_title">
                <h1>Tasks</h1>

                <p>View all</p>
              </div>
              <div className="bottem_content">
                <h3>Create new task</h3>
                <button className="btn-plus">+</button>
              </div>
              <div className="bottem_content">
                <h2>Finish ticket update</h2>
                <button className="btn-urgent">Urgent</button>
              </div>
              <div className="bottem_content">
                <h2>Create new ticket example</h2>
                <button className="btn-new">New</button>

              </div>
              <div className="bottem_content">
                <h2>Update ticket report</h2>
                <button className="btn-default">Default</button>
              </div>

            </div>


          </div>
        </div>
        </div>
        </>
    )
  }

  export default Overview