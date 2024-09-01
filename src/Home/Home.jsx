import { TabContext, TabList } from "@mui/lab";

import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Home.css";

const Home = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderingCard = (count) => {
    return Array.from({ length: count }, (_, index) => {
      <CSSTransition key={index} timeout={500} classNames="card-replace">
        <div className="card">{`Card ${index + 1}`}</div>
      </CSSTransition>;
    });
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TransitionGroup className="card-container">
            {renderingCard(
              <div className="grid grid-cols-4 scroll-m-1 gap-4">
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, distinctio!
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Delectus inventore quos iusto aut voluptatem eveniet,
                    aliquam illo incidunt?
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Nobis similique nemo obcaecati, libero quasi sint quidem
                    delectus repellat?
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Tempora dolores voluptatem accusamus mollitia laborum
                    blanditiis itaque delectus quaerat.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Veritatis asperiores maxime nobis, ullam facere impedit vero
                    perspiciatis quo.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Voluptatem sequi tempora expedita numquam, labore facilis
                    tenetur a voluptatum!
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Explicabo, laborum sapiente consequatur obcaecati eum
                    officiis vero blanditiis nobis.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Repellat quas tempore molestiae, aliquid sint tenetur
                    repellendus vero excepturi!
                  </p>
                </div>
              </div>
            )}
          </TransitionGroup>
        </TabPanel>

        <TabPanel value="2">
          <TransitionGroup className="card-container">
            {renderingCard(
              <div className="grid grid-cols-4 scroll-m-1 gap-4">
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, distinctio!
                  </p>
                </div>
                
                
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Tempora dolores voluptatem accusamus mollitia laborum
                    blanditiis itaque delectus quaerat.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Veritatis asperiores maxime nobis, ullam facere impedit vero
                    perspiciatis quo.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Voluptatem sequi tempora expedita numquam, labore facilis
                    tenetur a voluptatum!
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Explicabo, laborum sapiente consequatur obcaecati eum
                    officiis vero blanditiis nobis.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Repellat quas tempore molestiae, aliquid sint tenetur
                    repellendus vero excepturi!
                  </p>
                </div>
              </div>
            )}
          </TransitionGroup>
        </TabPanel>

        <TabPanel value="3">
          <TransitionGroup className="card-container">
            {renderingCard(
              <div className="grid grid-cols-4 scroll-m-1 gap-4">
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, distinctio!
                  </p>
                </div>
                
                
               
                
                
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Explicabo, laborum sapiente consequatur obcaecati eum
                    officiis vero blanditiis nobis.
                  </p>
                </div>
                <div className="border border-purple-700 p-6 text-green-800">
                  <p>
                    Repellat quas tempore molestiae, aliquid sint tenetur
                    repellendus vero excepturi!
                  </p>
                </div>
              </div>
            )}
          </TransitionGroup>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default Home;
