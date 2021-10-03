import {StyleSheet} from 'react-native';
import {theme} from '../../../core/theme';
const Styles =
StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.primary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginTop:5
    },
    texts:{
      fontSize: 13,
      color: theme.colors.primary,
      marginTop:5
    },
  });
  export default Styles;