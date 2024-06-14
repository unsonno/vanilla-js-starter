const apiUrl = "http://localhost:3000/api/task/";

////GET////
export let getData = async () => {
  try {
    let response = await fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}
////POST///
export let postData = async (tarea) => {
  try {
    let response = await fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea)
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}
////DELETE////
export let deleteData = async (id) => {
  try {
    let response = await fetch(apiUrl+id, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}
////PUT////
export let putData = async (obj) => {
  try {
    let response = await fetch(apiUrl+obj.id, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}