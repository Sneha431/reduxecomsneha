import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfoliosection from "./Components/Portfoliosection";
import Pricesection from "./Components/Pricesection";
import Transaction from "./Components/Transaction";
import Infocard from "./Components/Infocard";
import Supportcard from "../Support/Components/Supportcard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", xl: "repeat(2,1fr)" }}
        gap="6"
      >
        <GridItem colSpan={{ base: "1", lg: "2" }}>
          <Portfoliosection />
        </GridItem>
        <GridItem colSpan={1}>
          <Pricesection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard
            imgUrl={"/dot_bg.svg"}
            buttontext={"Loan"}
            text={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard
            imgUrl={"/grid_bg.svg"}
            buttontext={"Contact"}
            inverted={true}
            text={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 9500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
