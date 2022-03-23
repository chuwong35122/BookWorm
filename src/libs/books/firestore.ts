import {doc, setDoc, getFirestore} from 'firebase/firestore';

export async function addBookToDatabase() {
  console.log('hehe');
  await setDoc(doc(getFirestore(), 'Books', 'test'), {
    name: 'Harry Potter',
  });
  console.log('done');
}
