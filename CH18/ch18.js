const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./univ.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

const Table = require('cli-table');

class Menu {
  static Login() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Mahasiswa');
    console.log('[2] Dosen');
    console.log('[3] Jurusan');
    console.log('[4] Mata Kuliah');
    console.log('[5] SKS');
    console.log('[6] Keluar');
    Interface.readline();
  }

  static Menu_Mahasiswa() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Daftar Mahasiswa');
    console.log('[2] Cari Mahasiswa');
    console.log('[3] Tambah Mahasiswa');
    console.log('[4] Hapus Mahasiswa');
    console.log('[5] Kembali');
    Interface.Mahasiswa();
  }

  static Menu_Dosen() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Daftar Dosen');
    console.log('[2] Cari Dosen');
    console.log('[3] Tambah Dosen');
    console.log('[4] Hapus Dosen');
    console.log('[5] Kembali');
    Interface.Dosen();
  }

  static Menu_Jurusan() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Daftar Jurusan');
    console.log('[2] Cari Jurusan');
    console.log('[3] Tambah Jurusan');
    console.log('[4] Hapus Jurusan');
    console.log('[5] Kembali');
    Interface.Jurusan();
  }

  static Menu_Mata_Kuliah() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Daftar Mata Kuliah');
    console.log('[2] Cari Mata Kuliah');
    console.log('[3] Tambah Mata Kuliah');
    console.log('[4] Hapus Mata Kuliah');
    console.log('[5] Kembali');
    Interface.Mata_Kuliah();
  }

  static Menu_KRS() {
    console.log('Silahkan pilih opsi di bawah ini');
    console.log('[1] Daftar KRS');
    console.log('[2] Cari KRS');
    console.log('[3] Tambah KRS');
    console.log('[4] Hapus KRS');
    console.log('[5] Kembali');
    Interface.KRS();
  }
}

class Mahasiswa {
    static read() {
        console.log("=================================")
        var table = new Table
        head: ['Nim', 'Nama_Mahasiswa', 'Umur', 'Jurusan', 'Alamat','ID_Jurusan']
          const AllMahasiswa = `SELECT * FROM Mahasiswa`;
          db.all(AllMahasiswa, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((Mahasiswa) => {
              table.push([Mahasiswa.Nim, Mahasiswa.Nama_Mahasiswa, Mahasiswa.Umur, Mahasiswa.Jurusan, Mahasiswa.Alamat, Mahasiswa.ID_Jurusan]);
            });
            console.log(table.toString());
            console.log('=================================');
            Menu.Menu_Mahasiswa();
          });
    }
    static search() {
      const searchMahasiswa = `SELECT * FROM Mahasiswa WHERE Mahasiswa.Nim = ?`
      console.log('=================================');
      rl.question('Masukan NIM:', (userInput) => {
        db.get(searchMahasiswa), [userInput], (err,Mahasiswa) => {
          if (err) {
            throw err
          }
          if (Mahasiswa) {
            console.log(`=================================\nstudent details\nNIM : ${Mahasiswa.Nim} \nNama : ${Mahasiswa.Nama_Mahasiswa} \nAlamat : ${Mahasiswa.Alamat} \nJurusan : ${Mahasiswa.ID_Jurusan}`);
          }
          else {
            console.log('=================================');
            console.log(`Mahasiswa dengan NIM ${userInput} tidak terdaftar`)
          }
          console.log('=================================');
          Menu.Menu_Mahasiswa()
        }
      })
    }
    static add() {
      const addMahasiswa = `INSERT INTO Mahasiswa (Nim, Nama_Mahasiswa, Umur, Jurusan, Alamat, ID_Jurusan) values (?,?,?,?,?,?)`
      console.log('=================================');
      console.log('Lengkapi data di bawah ini :');
      rl.question('NIM :', (Nim) => {
        rl.question('Nama_Mahasiswa :', (Nama_Mahasiswa) => {
          rl.question('Umur :', (Umur) => {
            rl.question('Jurusan :', (Jurusan) => {
              rl.question('Alamat :', (Alamat) => {
                rl.question('ID_Jurusan :', (ID_Jurusan) => {
                  db.get(addMahasiswa,[Nim,Nama_Mahasiswa,Umur,Jurusan,Alamat,ID_Jurusan], (err) => {
                    if (err) {
                      throw err
                    }
                    else {
                      Mahasiswa.read()
                    }
                  })
                })
              })
            })
          })
        })
      })
    }
    static delete() {
      const deleteMahasiswa = `DELETE FROM Mahasiswa WHERE Mahasiswa.Nim = ?`
      console.log('=================================');
      rl.question(`Masukan NIM Mahasiswa yang akan dihapus :`, (userInput) => {
        db.run(deleteMahasiswa, [userInput], (err) => {
          if (!err) {
            console.log('=================================');
            console.log(`Mahasiswa dengan NIM: ${userInput} telah dihapus`)
            Mahasiswa.read();
          }
        })
      })
    }
}

//------------Dosen-----------------//

class Dosen {
  static read() {
    console.log('=================================');
    var table = new Table();
    head: ['Nip', 'Nama'];
    const AllDosen = `SELECT * FROM Dosen`;
    db.all(AllDosen, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((Dosen) => {
        table.push([Dosen.Nip, Dosen.Nama]);
      });
      console.log(table.toString());
      console.log('=================================');
      Menu.Menu_Dosen();
    });
  }
  static search() {
    const searchDosen = `SELECT * FROM Dosen WHERE Dosen.Nip = ?`;
    console.log('=================================');
    rl.question('Masukan NIP:', (userInput) => {
      db.get(searchDosen),
        [userInput],
        (err, Dosen) => {
          if (err) {
            throw err;
          }
          if (Dosen) {
            console.log(`=================================\nLecturer details\nNIP : ${Dosen.Nip} \nNama : ${Dosen.Nama}`);
          } else {
            console.log('=================================');
            console.log(`Dosen dengan NIP ${userInput} tidak terdaftar`);
          }
          console.log('=================================');
          Menu.Menu_Dosen();
        };
    });
  }
  static add() {
    const addDosen = `INSERT INTO Dosen (Nip, Nama) values (?,?)`;
    console.log('=================================');
    console.log('Lengkapi data di bawah ini :');
    rl.question('NIP :', (Nip) => {
      rl.question('Nama Dosen:', (Nama) => {
                db.get(addDosen, [Nip, Nama], (err) => {
                  if (err) {
                    throw err;
                  } else {
                    Dosen.read();
                  }
                });
              });
            });
  }
  static delete() {
    const deleteDosen = `DELETE FROM Dosen WHERE Dosen.Nip = ?`;
    console.log('=================================');
    rl.question(`Masukan NIP Mahasiswa yang akan dihapus :`, (userInput) => {
      db.run(deleteDosen, [userInput], (err) => {
        if (!err) {
          console.log('=================================');
          console.log(`Dosen dengan NIP: ${userInput} telah dihapus`);
          Dosen.read();
        }
      });
    });
  }
}

//------------Jurusan-----------------//

class Jurusan {
  static read() {
    console.log('=================================');
    var table = new Table();
    head: ['ID_Jurusan', 'Nama'];
    const AllJurusan = `SELECT * FROM Jurusan`;
    db.all(AllJurusan, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((Jurusan) => {
        table.push([Jurusan.ID_Jurusan, Jurusan.Nama]);
      });
      console.log(table.toString());
      console.log('=================================');
      Menu.Menu_Jurusan();
    });
  }
  static search() {
    const searchJurusan = `SELECT * FROM Dosen WHERE Jurusan.ID_Jurusan = ?`;
    console.log('=================================');
    rl.question('Masukan ID Jurusan:', (userInput) => {
      db.get(searchJurusan),
        [userInput],
        (err, Jurusan) => {
          if (err) {
            throw err;
          }
          if (Jurusan) {
            console.log(`=================================\nJurusan details\nID_Jurusan : ${Jurusan.ID_Jurusan} \nNama : ${Jurusan.Nama}`);
          } else {
            console.log('=================================');
            console.log(`Dosen dengan NIP ${userInput} tidak terdaftar`);
          }
          console.log('=================================');
          Menu.Menu_Jurusan();
        };
    });
  }
  static add() {
    const addJurusan = `INSERT INTO Jurusan (ID_Jurusan, Nama) values (?,?)`;
    console.log('=================================');
    console.log('Lengkapi data di bawah ini :');
    rl.question('ID_Jurusan :', (ID_Jurusan) => {
      rl.question('Nama Jurusan:', (Nama) => {
        db.get(addJurusan, [ID_Jurusan, Nama], (err) => {
          if (err) {
            throw err;
          } else {
            Jurusan.read();
          }
        });
      });
    });
  }
  static delete() {
    const deleteJurusan = `DELETE FROM Jurusan WHERE Jurusan.ID_Jurusan = ?`;
    console.log('=================================');
    rl.question(`Masukan ID Jurusan yang akan dihapus :`, (userInput) => {
      db.run(deleteJurusan, [userInput], (err) => {
        if (!err) {
          console.log('=================================');
          console.log(`Jurusan dengan ID_Jurusan: ${userInput} telah dihapus`);
          Jurusan.read();
        }
      });
    });
  }
}

//------------Mata Kuliah-----------------//

class Mata_Kuliah {
  static read() {
    console.log('=================================');
    var table = new Table();
    head: ['ID_MataKuliah', 'Nama', 'SKS'];
    const AllMataKuliah = `SELECT * FROM Mata_Kuliah`;
    db.all(AllMataKuliah, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((Mata_Kuliah) => {
        table.push([Mata_Kuliah.Id_MataKuliah, Mata_Kuliah.Nama, Mata_Kuliah.SKS]);
      });
      console.log(table.toString());
      console.log('=================================');
      Menu.Menu_Mata_Kuliah();
    });
  }
  static search() {
    const searchMataKuliah = `SELECT * FROM Mata_Kuliah WHERE Mata_Kuliah.Id_MataKuliah = ?`;
    console.log('=================================');
    rl.question('Masukan ID Mata Kuliah:', (userInput) => {
      db.get(searchMataKuliah),
        [userInput],
        (err, Mata_Kuliah) => {
          if (err) {
            throw err;
          }
          if (Mata_Kuliah) {
            console.log(`=================================\nMata Kuliah details\nID_MataKuliah : ${Mata_Kuliah.Id_MataKuliah} \nNama : ${Mata_Kuliah.Nama} \nSKS: ${Mata_Kuliah.SKS}`);
          } else {
            console.log('=================================');
            console.log(`Mata Kuliah dengan Id Mata Kuliah ${userInput} tidak terdaftar`);
          }
          console.log('=================================');
          Menu.Menu_Mata_Kuliah();
        };
    });
  }
  static add() {
    const addMataKuliah = `INSERT INTO Mata_Kuliah (Id_MataKuliah, Nama, SKS) values (?,?,?)`;
    console.log('=================================');
    console.log('Lengkapi data di bawah ini :');
    rl.question('Id_MataKuliah :', (Id_MataKuliah) => {
      rl.question('Nama Mata Kuliah:', (Nama) => {
        rl.question('SKS :',(SKS) => {
        db.get(addMataKuliah, [Id_MataKuliah, Nama, SKS], (err) => {
          if (err) {
            throw err;
          } else {
            Mata_Kuliah.read();
          }
        });
      });
    });
    });
  }
  static delete() {
    const deleteMataKuliah = `DELETE FROM Mata_Kuliah WHERE Mata_Kuliah.Id_MataKuliah = ?`;
    console.log('=================================');
    rl.question(`Masukan ID Mata Kuliah yang akan dihapus :`, (userInput) => {
      db.run(deleteMataKuliah, [userInput], (err) => {
        if (!err) {
          console.log('=================================');
          console.log(`Mata Kuliah dengan Id_MataKuliah: ${userInput} telah dihapus`);
          Mata_Kuliah.read();
        }
      });
    });
  }
}

//------------KRS-----------------//

class KRS {
  static read() {
    console.log('=================================');
    var table = new Table();
    head: ['Nilai', 'Nip', 'Nim', 'Id_MataKuliah'];
    const AllMataKuliah = `SELECT * FROM KRS`;
    db.all(AllMataKuliah, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((KRS) => {
        table.push([KRS.Nilai, KRS.Nip, KRS.Nim, KRS.Id_MataKuliah]);
      });
      console.log(table.toString());
      console.log('=================================');
      Menu.Menu_KRS();
    });
  }
  static search() {
    const searchKRS = `SELECT * FROM KRS WHERE KRS.Id_MataKuliah = ?`;
    console.log('=================================');
    rl.question('Masukan Id Mata Kuliah:', (userInput) => {
      db.get(searchKRS),
        [userInput],
        (err, KRS) => {
          if (err) {
            throw err;
          }
          if (KRS) {
            console.log(`=================================\nMata Kuliah details\nNilai : ${KRS.Nilai} \nNip : ${KRS.Nip} \nNim: ${KRS.Nim} \nId_MataKuliah: ${KRS.Id_MataKuliah}`);
          } else {
            console.log('=================================');
            console.log(`Mata Kuliah dengan ID Mata Kuliah ${userInput} tidak terdaftar`);
          }
          console.log('=================================');
          Menu.Menu_KRS();
        };
    });
  }
  static add() {
    const addKRS = `INSERT INTO KRS (Nilai, Nip, Nim, Id_MataKuliah) values (?,?,?,?)`;
    console.log('=================================');
    console.log('Lengkapi data di bawah ini :');
    rl.question('Nilai :', (Nilai) => {
      rl.question('Nip:', (Nip) => {
        rl.question('Nim :', (Nim) => {
          rl.question('Id_MataKuliah :', (Id_MataKuliah) => {
          db.get(addKRS, [Nilai, Nip, Nim, Id_MataKuliah], (err) => {
            if (err) {
              throw err;
            } else {
              KRS.read();
            }
          });
        });
      });
    });
    });
  }
  static delete() {
    const deleteKRS = `DELETE FROM KRS WHERE KRS.Id_MataKuliah = ?`;
    console.log('=================================');
    rl.question(`Masukan ID Mata Kuliah yang akan dihapus :`, (userInput) => {
      db.run(deleteKRS, [userInput], (err) => {
        if (!err) {
          console.log('=================================');
          console.log(`KRS dengan ID_MataKuliah: ${userInput} telah dihapus`);
          KRS.read();
        }
      });
    });
  }
}

//------------KRS-----------------//

class Interface {
  static readline() {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            Menu.Menu_Mahasiswa()
            break;
          case '2':
            console.log('=================================');
            Menu.Menu_Dosen()
            break;
          case '3':
            console.log('=================================');
            Menu.Menu_Jurusan()
            break;
          case '4':
            console.log('=================================');
            Menu.Menu_Mata_Kuliah()
            break;
          case '5':
            console.log('=================================');
            Menu.Menu_KRS()
            break;
          case '6':
            console.log('Anda telah keluar.')
            rl.close()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.readline()
            break;
          }
        }
  )}
  static Mahasiswa() {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            Mahasiswa.read()
            break;
          case '2':
            console.log('=================================');
            Mahasiswa.search()
            break;
          case '3':
            console.log('=================================');
            Mahasiswa.add()
            break;
          case '4':
            console.log('=================================');
            Mahasiswa.delete()
            break;
          case '5':
            console.log('=================================');
            Menu.Login()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.Mahasiswa()
            break;
          }
        }
  )}
  static Dosen() {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            Dosen.read()
            break;
          case '2':
            console.log('=================================');
            Dosen.search()
            break;
          case '3':
            console.log('=================================');
            Dosen.add()
            break;
          case '4':
            console.log('=================================');
            Dosen.delete()
            break;
          case '5':
            console.log('=================================');
            Menu.Login()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.Dosen()
            break;
          }
        }
  )}
  static Jurusan() {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            Jurusan.read()
            break;
          case '2':
            console.log('=================================');
            Jurusan.search()
            break;
          case '3':
            console.log('=================================');
            Jurusan.add()
            break;
          case '4':
            console.log('=================================');
            Jurusan.delete()
            break;
          case '5':
            console.log('=================================');
            Menu.Login()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.Jurusan()
            break;
          }
        }
  )}
  static Mata_Kuliah() {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            Mata_Kuliah.read()
            break;
          case '2':
            console.log('=================================');
            Mata_Kuliah.search()
            break;
          case '3':
            console.log('=================================');
            Mata_Kuliah.add()
            break;
          case '4':
            console.log('=================================');
            Mata_Kuliah.delete()
            break;
          case '5':
            console.log('=================================');
            Menu.Login()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.Mata_Kuliah()
            break;
          }
        }
  )}
  static KRS () {
    rl.question(`Masukkan salah satu no. dari opsi diatas:`, (userInput) => {
      switch (userInput) {
          case '1':
            console.log('=================================')
            KRS.read()
            break;
          case '2':
            console.log('=================================');
            KRS.search()
            break;
          case '3':
            console.log('=================================');
            KRS.add()
            break;
          case '4':
            console.log('=================================');
            KRS.delete()
            break;
          case '5':
            console.log('=================================');
            Menu.Login()
            break;
          default:
            console.log('=================================');
            console.log('Masukkan pilihan dengan benar')
            Interface.KRS()
            break;
          }
        }
  )}    
}

const fs = require('fs');
let data = fs.readFileSync('datalist.json', 'utf-8');
var user = JSON.parse(data);
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('==================================================================');
console.log('Welcome to Universitas Pendidikan ');
console.log('Jl Setiabudhi no 25');
console.log('==================================================================');

rl.question(`please insert username :`, (username) => {
  rl.question('please insert password :', (password) => {
    if (user[0].username === username && user[0].password === password) {
      console.log('==================================================================');
      console.log(`Welcome, ${username}. Your access level is ADMIN`);
      console.log('==================================================================');
      Menu.Login();
      Interface.readline();
    } else {
      console.log('Anda belum terdaftar');
      rl.close();
    }
  });
});
