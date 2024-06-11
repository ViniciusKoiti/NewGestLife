import { Link } from 'expo-router';
import { type ComponentProps } from 'react';
import { Platform, View } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export function ContainerPage({ href, ...rest }: Props) {
  return (
   <View>



   </View>
  );
}

const styles = StyleSheet.create({
 
});