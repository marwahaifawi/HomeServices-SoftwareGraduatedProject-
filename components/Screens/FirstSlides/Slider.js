import * as React from 'react';
import { Text, View, Image} from 'react-native';
import Styles from './slidesStyle';
import SlidesInfo from '../SlidesList/SlidesInfo'
import ButtonItem from '../../Buttons/Buttons';
const SlideItem =({route, navigation})=>{
  const {title , subTitle , image , i}= route.params;
  let j = i === 3 ? j=5 : j=i ;
  return(
  <View style={Styles.container}>
      <Image
        source={image}
        style={Styles.slideImage} />
        <View style={Styles.textsView}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.subTitle}>{subTitle}</Text> 
        </View>

      <View style={Styles.buttonsView}>
      <ButtonItem
       content='Skip' 
       OnPress={()=> navigation.navigate('HomePage')} />
      <ButtonItem 
      content='Next' 
      OnPress={()=> j === 5 ? navigation.navigate('HomePage') : navigation.setParams({title: SlidesInfo[j+1].title , subTitle: SlidesInfo[j+1].subTitle ,image:SlidesInfo[j+1].image , i:i+1})}  />
      </View>   
     
    </View>   
    
  );
};
export default SlideItem;