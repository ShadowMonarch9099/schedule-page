import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfddddff',
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#0D2C54',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D2C54',
    marginBottom: 12,
    textAlign: 'center',
  },
card: {
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: 600,  
  padding: 16,
  borderRadius: 12,
  marginBottom: 12,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2,
  alignSelf: 'center',  
},

  disabledCard: {
    backgroundColor: '#f1f3f6',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0D2C54',
  },
  cardSubText: {
    marginTop: 6,
    color: '#6c757d',
  },
  bold: {
    fontWeight: 'bold',
    color: '#0D2C54',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
  dayContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  day: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  activeDay: {
    backgroundColor: '#0D2C54',
  },
  inactiveDay: {
    backgroundColor: '#e9ecef',
  },
  dayText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
newTask: {
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: 600,
  padding: 16,
  borderRadius: 12,
  marginBottom: 32,
  alignSelf: 'center',  
},

  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  pickerWrapper: {
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  picker: {
    height: 50,
  },
  input: {
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  cancelButton: {
    marginRight: 12,
    padding: 10,
  },
  cancelText: {
    color: '#6c757d',
  },
  scheduleButton: {
    backgroundColor: '#0D2C54',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  scheduleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateText: {
    color: '#6c757d',
    marginTop: 6,
  },
});

export default styles;