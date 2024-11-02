import {
    CommonFields,
    MtuField,
    DNSServersField,
    PathField,
    WeightField,
} from "../../fields";
import {
    Accordion,
    HStack
} from "@marzneshin/components";
import { SettingSection } from "@marzneshin/modules/hosts"
import { useTranslation } from "react-i18next";

export const WireguardProfileFields = () => {
    const { t } = useTranslation();
    return (
        <>
            <CommonFields />
            <Accordion type="single" collapsible>
                <SettingSection value="wireguard" triggerText={t("wireguard")}>
                    <HStack>
                        <PathField />
                        <WeightField />
                        <MtuField />
                    </HStack>
                    <DNSServersField />
                </SettingSection>
            </Accordion>
        </>
    )
}

export * from "./schema";
export * from "./default";