import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <Text style={{ color: '#fafbfc', textAlign: 'center',   fontSize: 24 }}>
        CURICULUM VITAE 
      </Text>

       <Text style={{ color: '#fafbfc', textAlign: 'center',   fontSize: 18}}>
        HAIKAL AZKAL AZKIYA 
      </Text>

      <Image
        source={require('./assets/IMG_6723 (1).jpg')}
        style={styles.foto}
      />

      <Text style={styles.text}>
        Nama Lengkap : Haikal Azkal Azkiya{"\n"}
        NIM : 2488010038{"\n"}
        Asal Sekolah : SMAN 6 CIREBON{"\n"}
        Cita-cita : Gantiin Prabowo{"\n"}
        Rencana mencapai cita-cita : saya masuk parpol{"\n"}
      </Text>

      <Text style={styles.text}>
        Pengalaman Organisasi :{"\n"}
        1. Ketua Osis SMAN 6 Cirebon (2022/2023){"\n"}
        2. Ketua Umum Himpunan Mahasiswa Informatika (Sekarang){"\n"}
        3. GenBI Scholarship Awardee, Staff Lingkungan Hidup{"\n"}
      </Text>

      <Text style={styles.text}>
        Pengalaman Pekerjaan :{"\n"}
        1. Waiters Eunola Coffee (Desember 2024, Mei-Juli dan Agustus 2025){"\n"}
        2. Waiters Safti Coffee (Desember 2025, Januari-Februari dan Mei 2026){"\n"}
        3. Barista KOREJAT Coffee (September 2025 - sekarang){"\n"}
        4. Barista Karasu Coffee (Juli 2026 - sekarang){"\n"}
      </Text>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0d5e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  text: {
    color: '#fafbfc',
    width: '90%',
      fontSize: 15,
      lineHeight: 24,
      marginBottom: 15,
  },
});