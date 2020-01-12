import { Button } from "@material-ui/core";
import styled from "styled-components";

const MyButton = styled(Button)`
  color: red;
  background: orange;
`;

export default () => (
  <div>
    Hello World.{" "}
    <MyButton variant="contained" color="primary">
      1
    </MyButton>
  </div>
);
