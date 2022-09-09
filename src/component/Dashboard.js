import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GoalTracking from "./GoalTracking";
import ProjectOverview from "./ProjectOverview";
import Calendar from "./Calendar";
import { positions } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <a>My Project</a>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100vh",
          borderLeft: "0",
          left:"0"
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "#f7f3f6",
          }}
        >
          <Tab
            label="Project Overview"
            sx={{ fontSize: "18px" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Goal Tracking"
            sx={{ fontSize: "18px" }}
            {...a11yProps(1)}
          />
          <Tab label="Calendar" sx={{ fontSize: "18px" }} {...a11yProps(2)}  />
          <Tab label="Settings" center sx={{ fontSize: "18px", position:"fixed", bottom:"0"}} {...a11yProps(2)}  />
        </Tabs>

        <TabPanel value={value} index={0}>
          <ProjectOverview></ProjectOverview>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GoalTracking></GoalTracking>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Calendar></Calendar>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Dashboard;
