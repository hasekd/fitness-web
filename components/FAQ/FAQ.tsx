import {
  Box,
  Divider,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import React from "react";

const FAQ = () => {
  return (
    <Box maxW={"130rem"} m={"0 auto"} p={"3rem 2rem"} minH={"70vh"}>
      <Box maxW={"5.8rem"} m={"0 auto 4rem auto"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"3rem"}
          mb={"1rem"}
          fontWeight={600}
        >
          faq
        </Text>
        <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
      </Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: theme.color.primary.blue, color: "#fff" }}
                transition={"all 0.3s ease-out"}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "2rem", lg: "3rem" }}
                  fontWeight={500}
                >
                  JAK PROBÍHÁ SPOLUPRÁCE
                </Box>
                <AccordionIcon fontSize={{ base: "1.7rem", lg: "2rem" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "1.3rem", lg: "1.5rem" }}>
              Spolupráce standardně začíná tak, že klientovi pošlu úvodní
              dotazník, kde mi vypíše klíčové informace o sobě, jako jsou: věk,
              váha, výška, alergie, co nerad a rád jí, zda užívá nějaké léky,
              jaké má možnosti pohybu, co je jeho cílem atd. Jakmile si projdu
              dotazník a dozvím se všechny potřebné informace, přijde na řadu
              platba. Po uhrazení platby sestavím plán na míru, který odešlu na
              klientovu emailovou adresu. Spolu s plánem posílám i „tabulku
              progresu“, kterou mi klient pravidelně jednou týdně vyplňuje. V
              tabulce jsou vypsány údaje jako: hmotnost, obvod pasu, paží,
              stehen, lýtek… Podle těchto údajů pak každý týden kontroluji
              pokrok a v případě potřeby upravuji jídelníček (případně i
              tréninkový plán) tak, aby vedl k nejlepším možným výsledkům.
              Samozřejmostí je to, že jsem s klientem v průběhu spolupráce v
              kontaktu (i mimo týdenní kontroly). Což znamená, že pokud má
              klient jakékoliv otázky, nebo se mnou potřebuje cokoliv řešit,
              může se na mě v průběhu spolupráce kdykoliv obracet.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton
              _expanded={{ bg: theme.color.primary.blue, color: "white" }}
              transition={"all 0.3s ease-out"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={{ base: "2rem", lg: "3rem" }}
                fontWeight={500}
              >
                STRAVOVACÍ PLÁN
              </Box>
              <AccordionIcon fontSize={{ base: "1.7rem", lg: "2rem" }} />
            </AccordionButton>

            <AccordionPanel pb={4} fontSize={{ base: "1.3rem", lg: "1.5rem" }}>
              Stravovací plán je sestavený tak, aby vyhovoval preferencím daného
              člověka a zohledňoval jeho individualitu. V jídelníčku je vždy
              více variant každého pokrmu, obvykle minimálně 10 variant snídaně,
              10 variant svačiny, 15 variant obědů a tak dále. Jednotlivé
              varianty jídel lze mezi sebou libovolně kombinovat, takže rozhodně
              nehrozí, že by klient musel jíst každý den to samé. Vždy si může
              vybrat z pestré nabídky jídel a kombinace skládat dle svých
              preferencí. Individuální je i frekvence stravování. Rozhodně
              neplatí, že bych klienta nutil jíst 5 nebo 6 porcí denně. Je možné
              Zároveň (pokud se s klientem nedomluvím individuálně jinak)
              nastavuji jídelníček obvykle tak, aby klient, který chce zhubnout,
              byl jen v lehkém kalorickém deficitu, kdy sice hubne tuk, ale
              zároveň má dostatek energie, dobrou náladu, netrpí hlady a je
              schopen i udržovat, či pozvolna budovat svalovou hmotu, což je ve
              většině případů optimální z hlediska zdraví a následného udržení
              výsledků. Ve chvíli, kdy chce klient nabírat svalovou hmotu, tak
              naopak (opět pokud se s klientem nedomluvím jinak) volím zpravidla
              lehký kalorický nadbytek, aby nedocházelo k zbytečnému nabírání
              tuků, ale pouze k čistému budování svalové hmoty. Což je z
              dlouhodobého hlediska nejvýhodnější. Nicméně toto jsou pouze dva
              ukázkové scénáře, jak může spolupráce fungovat (pouze pro
              představu). S každým klientem řeším jeho cíle i průběh spolupráce
              vždy naprosto individuálně. V ceně spolupráce je i tréninkový
              program, který klient může (ale nemusí) využít. Já však doporučuji
              využít i možnosti sestavení tréninkového programu, protože ve
              chvíli, kdy máme pod kontrolou stavu i trénink, můžeme mnohem
              efektivněji směřovat k požadovaným cílům. Tréninkový program vždy
              nastavuji tak, aby maximálně efektivně vedl k cíli daného klienta.
              Rozepisuji v něm vždy podrobně všechny důležité informace jako
              jsou například konkrétní cviky, počty opakování, vhodnou délku
              pauz mezi sériemi. Dále uvádím, jakou použít zátěž a další klíčové
              informace včetně rozpisu předtréninkové přípravy. V případě
              uzavření spolupráce máte zaručený individuální přístup a to, že se
              o vás budu starat tak, aby to vedlo k požadovaným výsledkům. :) V
              případě dlouhodobější spolupráce ode mě klient standardně
              zpravidla dostává nové varianty jídel do jídelníčku, aby se
              jídelníček nestal příliš stereotypním. Samozřejmostí při
              dlouhodobější spolupráci je i nový tréninkový program po každých 4
              týdnech. V případě jakýchkoliv dotazů ohledně spolupráce mne
              neváhejte kontaktovat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
