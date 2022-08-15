CREATE TABLE Dosen (
    Nip varchar(15) not null primary key,
    Nama varchar(30) not null,
    Id_MataKuliah varchar(15) not null, foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)
);

INSERT INTO Dosen
VALUES ('X001','Dudung Jamaludin','MK01'),('X002','Abdul Aziz','MK02'),('X003','Muhammad Tazakka','MK03');

CREATE TABLE Jurusan ( 
    ID_Jurusan varchar(15) not null primary key,
    Nama varchar(20) not null
);

INSERT INTO Jurusan
VALUES ('12011','Akuntansi'),('12012','Manajemen'),('12013','Ekonomi'),('12014','Bisnis Digital');

CREATE TABLE Kelas (
    Nim varchar (15) not null,
    Nip varchar(15) not null, 
    foreign key (Nip) references Dosen(Nip)
    foreign key (Nim) references Mahasiswa(Nim)
);

INSERT INTO Kelas
VALUES ('1201A','X001'),('1201B','X002'),('1201C','X003'),('1201D','X003');

CREATE TABLE Mahasiswa (
    Nim varchar(15) not null primary key,
    Nama varchar(30) not null,
    Jurusan varchar(15),
    Alamat text,
    ID_Jurusan varchar (15) not null, foreign key (ID_Jurusan) references Jurusan(ID_Jurusan)
);

INSERT INTO Mahasiswa 
VALUES ('1201A','Emiral Ahmad','Akuntansi','Joglo, Cianjur Jawa Barat','12011'),('1201B','Kahfi','Manajemen','Tanah Baru, Bogor Jawa Barat','12012'),('1201C','Fachri Naufal','Ekonomi','Condet Jakarta Timur','12013'),('1201D','Muhaedy','Bisnis Digital','Cinambo, Bandung Jawa Barat','12014');

CREATE TABLE Mata_Kuliah (
    Id_MataKuliah varchar(15) not null primary key,
    Nama varchar(15) not null,
    SKS int(5),
    Nim varchar(15) not null, foreign key (Nim) references Mahasiswa(Nim)
);

INSERT INTO Mata_Kuliah 
VALUES ('MK01','Ushul Fiqih',3,'1201A'),('MK02','Aqidah',3,'1201B'),('MK03','Fiqih',3,'1201C');

CREATE TABLE Penilaian (
    Nilai varchar (5) not null,
    Nim varchar (15) not null,
    Id_MataKuliah varchar(15) not null, 
    foreign key (Nim) references Mahasiswa(Nim)
    foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)
);

INSERT INTO Penilaian
VALUES ('A','1201A','MK01'), ('A','1201B','MK02'), ('A','1201C','MK03');
