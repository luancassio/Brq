"use client";

import {
  AbsoluteCenter,
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import useApi from "./hook/use-api";
import api from "./api/api";
import Country from "./model/country";
import CardCustom from "./components/card-custom";

export default function Home() {
  const [data, loading, error] = useApi({
    axiosInstance: api,
    method: "get",
    url: "/v3.1/all",
  });

  const dataCurrent = data
  return loading ? (
    <Box position="relative" h="100vh">
      <AbsoluteCenter>
        <CircularProgress isIndeterminate color="green.300" />
      </AbsoluteCenter>
    </Box>
  ) : (
    <Box padding={10}  bg={'whitesmoke'}>
      <CardCustom data={dataCurrent}/>
    </Box>
  );
}
