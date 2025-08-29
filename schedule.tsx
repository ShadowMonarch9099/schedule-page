import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  useWindowDimensions,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './scheduleStyle'; 

export default function ScheduleScreen() {
  const { width } = useWindowDimensions();

  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedAction, setSelectedAction] = useState('On');
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [repeatDays, setRepeatDays] = useState<string[]>([]);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [scheduleData, setScheduleData] = useState([
    {
      id: 1,
      title: 'Main Conveyor Motor',
      action: 'On',
      time: '08:00',
      days: ['S', 'M', 'Tu', 'W', 'Th', 'F'],
      enabled: true,
    },
    {
      id: 2,
      title: 'Workshop Lights',
      action: 'Off',
      time: '22:00',
      days: ['S', 'M', 'Tu', 'W', 'Th', 'F'],
      enabled: true,
    },
    {
      id: 3,
      title: 'HVAC Unit 1',
      action: 'On',
      time: '06:00',
      days: ['S', 'M', 'Tu', 'W', 'Th', 'Sa'],
      enabled: false,
    },
    {
      id: 4,
      title: 'Assembly Line 2',
      action: 'On',
      time: '09:00',
      date: 'July 27th, 2025',
      enabled: true,
    },
  ]);

  const dayLabels = [
    { short: 'S', full: 'Sunday' },
    { short: 'M', full: 'Monday' },
    { short: 'Tu', full: 'Tuesday' },
    { short: 'W', full: 'Wednesday' },
    { short: 'Th', full: 'Thursday' },
    { short: 'F', full: 'Friday' },
    { short: 'Sa', full: 'Saturday' },
  ];

  const toggleDayInSchedule = (id: number, day: string) => {
    setScheduleData((prev) =>
      prev.map((item) => {
        if (item.id === id && Array.isArray(item.days)) {
          return {
            ...item,
            days: item.days.includes(day)
              ? item.days.filter((d) => d !== day)
              : [...item.days, day],
          };
        }
        return item;
      })
    );
  };
  const toggleRepeatDay = (day: string) => {
  setRepeatDays((prev) =>
    prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
  );};

  const toggleEnabled = (id: number) => {
    setScheduleData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const containerWidth = width >= 768 ? '60%' : '100%';

  return (
<ScrollView contentContainerStyle={[styles.scrollContent, { width: containerWidth }]} 
  style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={18} color="white" />
        <Text style={styles.addButtonText}>Add New Schedule</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Current Schedules</Text>

      {scheduleData.map((item) => (
        <View key={item.id} style={[styles.card, !item.enabled && styles.disabledCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.icons}>
              <MaterialIcons name="edit" size={18} color="#6c757d" style={styles.icon} />
              <MaterialIcons name="delete" size={18} color="#dc3545" style={styles.icon} />
              <Switch value={item.enabled} onValueChange={() => toggleEnabled(item.id)} />
            </View>
          </View>
          <Text style={styles.cardSubText}>
            Turn <Text style={styles.bold}>{item.action}</Text> at{' '}
            <Text style={styles.bold}>{item.time}</Text>
          </Text>
          {item.date ? (
            <Text style={styles.dateText}>{item.date}</Text>
          ) : (
            <View style={styles.dayContainer}>
              {dayLabels.map((day) => (
                <TouchableOpacity
                  key={day.short}
                  style={[
                    styles.day,
                    Array.isArray(item.days) && item.days.includes(day.short) ? styles.activeDay : styles.inactiveDay,
                  ]}
                   onPress={() => toggleDayInSchedule(item.id, day.short)}
                >
                  <Text style={styles.dayText}>{day.short}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}

      <Text style={styles.header}>New Task</Text>
      <View style={styles.newTask}>
        <Text style={styles.label}>Device</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedDevice}
            onValueChange={(itemValue) => setSelectedDevice(itemValue)}
            style={styles.picker}
            dropdownIconColor="#0D2C54"
          >
            <Picker.Item label="Select a device to control" value="" />
            <Picker.Item label="Main Conveyor Motor" value="motor" />
            <Picker.Item label="Workshop Lights" value="lights" />
          </Picker>
        </View>

        <Text style={styles.label}>Action</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedAction}
            onValueChange={(itemValue) => setSelectedAction(itemValue)}
            style={styles.picker}
            dropdownIconColor="#0D2C54"
          >
            <Picker.Item label="Turn On" value="On" />
            <Picker.Item label="Turn Off" value="Off" />
          </Picker>
        </View>

        <Text style={styles.label}>Time</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
          <Text>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              setShowTimePicker(false);
              if (selectedDate) setTime(selectedDate);
            }}
          />
        )}

        <Text style={styles.label}>Repeat Task</Text>
        <View style={styles.dayContainer}>
          {dayLabels.map((day) => (
            <TouchableOpacity
            key={day.short}
            onPress={() => toggleRepeatDay(day.short)}  // <-- Change this line
            style={[
                styles.day,
                repeatDays.includes(day.short) ? styles.activeDay : styles.inactiveDay,
            ]}
            >
            <Text style={styles.dayText}>{day.short}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scheduleButton}>
            <Text style={styles.scheduleText}>Schedule Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}