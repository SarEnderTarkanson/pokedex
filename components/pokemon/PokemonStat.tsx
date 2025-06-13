import { StyleSheet, View, type ViewProps } from "react-native";
import { Row } from "../Row";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = ViewProps & {
  name: string;
  value: number;
  color: string;
};

export function PokemonStat({ style, color, name, value, ...rest }: Props) {
  const colors = useThemeColors();

  return (
    <Row style={[style, styles.root]} {...rest}>
      <View style={[styles.name, { borderColor: colors.grayLight }]}>
        <ThemedText variant="subtitle3" style={{ color: color }}>
          {name}
        </ThemedText>
      </View>
      <View style={styles.number}>
        <ThemedText>{value.toString().padStart(3, "0")}</ThemedText>
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  root: {},
  name: {
    width: 31,
    paddingRight: 8,
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  number: {
    width: 23,
  },
});
