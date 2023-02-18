import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Header } from './components';
import { GetCandidates, DeleteCandidate, CreateCandidate, UpdateCandidate } from './services/services';

export default function App() {


  const [candidates, setCandidates] = useState([]);
  const [info, setInfo] = useState("");
  const [selected, setSelected] = useState("NA");
  const [add, setAdd] = useState(true);

  let onAddCandidate = (fname, lname, email, score) => {
    if (fname && lname) {
      let canInfo = {
        fname: fname,
        lname: lname,
        ...email ? { email: email } : {},
        ...score ? { score: score } : {},
      }
      CreateCandidate(canInfo).then((data) => {
        setCandidates([data]);
      });
    } else {
      setInfo("Please provide first name and last name");
      setTimeout(() => setInfo(""), 2000);
    }
    }
    
  let onUpdateCandidate = (id, fname, lname, email, score) => {
      
     if (Number(id) && fname && lname) {
        let canInfo = {
          fname: fname,
          lname: lname,
          ...email ? { email: email } : {},
          ...score ? { score: score } : {},
        }
        UpdateCandidate(id, canInfo).then((data) => {
          var i = candidates.findIndex(c => c.id === id);
          candidates[i] = {id:id, fname:fname, lname:lname, email:email, score:score};
          setCandidates([...candidates]);
        });
      } else {
        setInfo("Please provide valid id, first name and last name");
        setTimeout(() => setInfo(""), 2000);
      }
    }

  let onDeleteCandidate = (id) => {
    DeleteCandidate(id);
    setCandidates(candidates.filter(c => c.id !== id));

  };

  let onSearchCandidate = (fname, lname, email) => {
    GetCandidates(fname, lname, email).then((data) => {
    setCandidates(data);
    })
  };

  let onOrderCandidate = () => {
    setCandidates([...candidates].sort((a, b) => Number(b.score) - Number(a.score)));
   }

  let onSelectCandidate = (id) => { setSelected(id); setAdd(false); }  





  return (
    <View style={styles.container}>
      <Header selected = {selected} add = {add} onOrderClick={onOrderCandidate} onAddClick={onAddCandidate} onUpdateClick={ onUpdateCandidate} onSearchClick={onSearchCandidate} />
      <Body list={candidates} onDeleteClick={onDeleteCandidate} onSelectClick={onSelectCandidate} />
      <Text>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
