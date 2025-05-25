import { ViewStyle, Image } from "react-native";
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  style?: ViewStyle;
  id: number;
  name: string;
};

export function PokemonCart({ style, id, name }: Props) {
  return (
    <Card style={style}>
      <ThemedText variant="caption" color="grayMedium">
        #{id.toString().padStart(3, "0")}
      </ThemedText>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
        width={72}
        height={72}
      />
      <ThemedText>
        {name}
      </ThemedText>
    </Card>
  );
}
