import { StyleSheet, View } from "react-native";

type Props = {
  value: "id" | "name";
  onChange: (v: "id" | "name") => void;
};

export function SortButton({ value, onChange }: Props) {
    return <View></View>
}

const styles = StyleSheet.create({});
