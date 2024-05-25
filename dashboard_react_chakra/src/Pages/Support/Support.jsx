import { Stack } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Contactcard from "./Components/Contactcard";
import Supportcard from "./Components/Supportcard";
import Infocard from "./../Dashboard/Components/Infocard";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <Supportcard
          icon={IoMdMail}
          leftcomponent={<Contactcard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <Supportcard
          icon={AiTwotoneMessage}
          leftcomponent={
            <Infocard
              inverted={true}
              buttontext="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
