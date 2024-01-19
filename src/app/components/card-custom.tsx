import {
  CardFooter,
  Card,
  Avatar,
  Box,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Country from "../model/country";

import logoNissan from './assets/Nissan_logo.png'

export default function CardCustom({ data }: any) {
  const dataCurrent = data.map((x: any) => new Country(x)) as Country[];

  function getNameCurrency(data: Country): string {
    if (data?.currencies) {
      return data.currencies[Object.keys(data?.currencies)[0]].name;
    }

    return "Não Encontrado";
  }

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(400px, 2fr))"
    >
      {dataCurrent?.map((card, idx) => {
        return (
          <Card maxW="md" key={idx}>
            <Image
              objectFit={"cover"}
              src={card.flags.svg}
              alt={card.flags.alt}
            />
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">Moeda</Heading>
                    <Text>{getNameCurrency(card)}</Text>
                  </Box>
                  <Box>
                    <Heading size="sm">Cidade</Heading>
                    <Text>{card.name.common}</Text>
                  </Box>
                  <Box>
                    <Heading size="sm">Capital</Heading>
                    <Text>{card.capital}</Text>
                  </Box>
                  <Box>
                    <Heading size="sm">População</Heading>
                    <Text>{card.population}</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>

          {
            card.isRegionAsia(card) ? 
            <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Box>
              <Box mb={3}>
                <Heading size="sm">Montadoras</Heading>
              </Box>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Image
                      objectFit="cover"
                      src={'/assets/Nissan_logo.png'}
                      alt={'Logo Montadora NIssan'}
                      width={12}
                    />
                    <Image
                      objectFit="cover"
                      src={'/assets/logo-hyundai.png'}
                      alt={'Logo Montadora Hyundai'}
                      width={16}
                    />
                    <Image
                      objectFit="cover"
                      src={'/assets/Honda-logo.png'}
                      alt={'Logo Montadora Honda'}
                      width={12}
                    />
                    <Image
                      objectFit="cover"
                      src={'/assets/logo-cherry1.jpg'}
                      alt={'Logo Montadora cherry'}
                      width={12}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </CardFooter>
          : null

          }
{          card.isSpeakFrench(card) ?
          <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Box>
            <Box mb={3}>
              <Heading size="sm">Montadoras</Heading>
            </Box>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">

                  <Image
                    objectFit="cover"
                    src={'/assets/logo-renault.png'}
                    alt={'Logo Montadora Renault'}
                    width={12}
                  />
                  <Image
                    objectFit="cover"
                    src={'/assets/logo-citroen.png'}
                    alt={'Logo Montadora Citroen'}
                    width={12}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </CardFooter> : null}
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
