import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import WorkersData from './WorkersInfo';
import { theme } from '../../core/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import WorkersView from '../listView/WorkersView';
import Title from '../Texts/Title';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';

export default function Workers({ route }) {
  const service = route.params;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [WorkersDataF, setWorkersDataF] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisible2, setIsModalVisible2] = React.useState(false);
  const [Search, setSearch] = useState('');
  const handleModal =  () => setIsModalVisible(() => !isModalVisible);
  const [items, setItems] = useState([
    { label: "", value: "" },
    { label: 'Nablus', value: "Nablus" },
    { label: 'Ramallah', value: 'Ramallah' },
    { label: 'Jenin', value: 'Jenin' },
  ]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  useEffect(() => {
    fetchData();
    return () => {
    }
  }, []);
  const fetchData = () => {
    if (service.name) {
      const tempList = WorkersData.filter((item) => {
        const itemdata = item.servicesoffered ?
          item.servicesoffered.toUpperCase()
          :
          ''.toUpperCase();
        const data = service.name.toUpperCase();
        return itemdata.indexOf(data) > - 1;
      });
      setFiltered(tempList);
      setWorkersDataF(tempList);
    }
    else {
      setFiltered(WorkersData);
      setWorkersDataF(WorkersData);
    }
  }
  const sort = () => {
    let sortedList = [...filtered];
    sortedList.sort((a, b) => {
      if (a.Name > b.Name) {
        return 1;
      }
      else if (a.Name < b.Name) {
        return -1;
      }
      else
        return 0;
    }
    )
    setFiltered(sortedList);
  }
  const onSearch = (text) => {
    if (text) {
      const tempList = filtered.filter((item) => {
        const itemdata = item.Name ?
          item.Name.toUpperCase()
          :
          ''.toUpperCase();
        const data = text.toUpperCase();
        return itemdata.indexOf(data) > - 1;
      });
      setFiltered(tempList);
      setSearch(text);
    }
    else {
      setSearch('');
      fetchData();
    }
  }
  const filterData = (value) => {
    if (value) {
      const tempList = WorkersDataF.filter((item) => {
        const itemdata = item.City === value ? item : '';
        return itemdata;
      });
      setFiltered(tempList);
    }
    else {
      fetchData();
    }
    handleModal();
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image style={{ alignSelf: 'center', marginTop: 10, width: 50, height: 50 }} source={require('../../assets/justlogo.png')} />
        <Text style={{
          width: '50%',
          marginTop: 30,
          flexDirection: 'row',
          alignSelf: 'center',
          fontSize: 20,
          fontFamily: 'FontThree',
          color: theme.colors.primary
        }}>HOME SERVICES</Text>

      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 5 }}>
        <View style={styles.containersearch}>
          <MaterialCommunityIcons name="home-search-outline" size={25} color='lightgrey' />
          <TextInput
            style={styles.searchInput}
            value={Search}
            placeholder={"Search  Workers"}
            onChangeText={(text) => onSearch(text)}
          />
        </View>
        <TouchableOpacity onPress={handleModal} style={{ alignSelf: 'center', marginLeft: 10, marginTop: 7 }}>
          <Feather name="filter" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sort} style={{ alignSelf: 'center', marginLeft: 10, marginTop: 7 }}>
          <MaterialCommunityIcons name="sort" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <WorkersView data={filtered} />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Title fontFamily={{ fontFamily: 'FontThree' }}>
            Filter your search
          </Title>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
            <MaterialCommunityIcons name="home-city-outline" size={24} color={theme.colors.primary} />
            <Text style={styles.text}>
              By City
            </Text>
          </View>
          <DropDownPicker
            style={{ borderColor: theme.colors.primary }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={filterData}
          />
          <TouchableOpacity onPress={showDatepicker}>
            <View style={{ flexDirection: 'row', marginTop: 125 }}>
              <Fontisto name="date" size={22} color={theme.colors.primary} />
              <Text style={styles.text}>
                By Date
              </Text>
            </View>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={styles.button}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleModal} >
                <Text style={{ color: theme.colors.secondary, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontTwo' }}>
                  Cancle
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button1}>
              <TouchableOpacity onPress={(value) => filterData(value)} style={{ flexDirection: 'row' }}  >
                <Text style={{ color: theme.colors.surface, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontTwo' }}>
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 10,

  },
  header: {
    flex: 1,
  },
  body: {
    flex: 7,
    borderRadius: 15,
  },
  containersearch: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,

  },
  searchInput: {
    height: '100%',
    width: '90%',
    fontSize: 17,
    fontFamily: 'FontTwo',
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "lightgray",
    marginLeft: 7
  },
  text: {
    fontSize: 20,
    fontFamily: 'FontTwo',
    color: 'gray',
    marginLeft: 10
  },
  searchIcon: {
    width: "10%",
    height: '100%',
  },
  modal: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20
  },
  button: {
    backgroundColor: theme.colors.surface,
    fontFamily: 'FontTow',
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 40,
    width: 90,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  button1: {
    backgroundColor: theme.colors.secondary,
    fontFamily: 'FontTow',
    borderRadius: 20,
    marginTop: 40,
    width: 90,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
})
