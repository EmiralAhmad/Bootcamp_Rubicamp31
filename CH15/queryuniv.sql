CREATE TABLE Dosen (
    Nip varchar(15) not null primary key,
    Nama varchar(30) not null,
    NamaMata_Kuliah varchar (15) not null
);

INSERT INTO Dosen
VALUES 
('X001','Dudung Jamaludin','Aqidah'),
('X002','Abdul Aziz','Fiqih'),
('X003','Muhammad Tazakka','Ushul Fiqih'),
('X004','Himawan','Data Mining'),
('X005','Fernanda','Programming'),
('X006','Rahmat Fajar','Design'),
('X007','Chairil Anwar','Olahraga');

CREATE TABLE Jurusan ( 
    ID_Jurusan varchar(15) not null primary key,
    Nama varchar(20) not null
);

INSERT INTO Jurusan
VALUES ('12011','Akuntansi'),('12012','Manajemen'),('12013','Ekonomi'),('12014','Bisnis Digital');

CREATE TABLE Kelas (
    Nama_Kelas varchar(15) not null,
    Nim varchar (15) not null,
    Nip varchar(15) not null, 
    foreign key (Nip) references Dosen(Nip)
    foreign key (Nim) references Mahasiswa(Nim)
);

INSERT INTO Kelas
VALUES 
('1201A','X001'),
('1201A','X002'),
('1201A','X003'),
('1201A','X004'),
('1201A','X005'),
('1201A','X006'),
('1201A','X007'),
('1201B','X002'),
('1201C','X003'),
('1201D','X003'),
('1201E','X004'),
('1201F','X006'),
('1201G','X007');

CREATE TABLE Mahasiswa (
    Nim varchar(15) not null primary key,
    Nama_Mahasiswa varchar(30) not null,
    Umur int(3) not null,
    Jurusan varchar(15) not null,
    Alamat text,
    ID_Jurusan varchar (15) not null, foreign key (ID_Jurusan) references Jurusan(ID_Jurusan)
);

INSERT INTO Mahasiswa 
VALUES 
('1201A','Emiral Ahmad','21','Akuntansi','Joglo, Cianjur Jawa Barat','12011'),
('1201B','Kahfi','19','Manajemen','Tanah Baru, Bogor Jawa Barat','12012'),
('1201C','Fachri Naufal','20','Ekonomi','Condet Jakarta Timur','12013'),
('1201D','Muhaedy','23','Bisnis Digital','Cinambo, Bandung Jawa Barat','12014'),
('1201E','Hilmi Hanif','22','Akuntansi','Kopo, Bandung Jawa Barat','12011'),
('1201F','Wildan Ismail','18','Manajemen','Sukamenak, Bandung Jawa Barat','12012'),
('1201G','Herlambang','33','Manajemen','Bengkulu','12013');

CREATE TABLE Mata_Kuliah (
    Id_MataKuliah varchar(15) not null primary key,
    Nama varchar(15) not null,
    SKS int(5)
);

INSERT INTO Mata_Kuliah 
VALUES 
('MK01','Ushul Fiqih',3),
('MK02','Aqidah',3),
('MK03','Fiqih',3),
('MK04','Data Mining',3),
('MK05','Programming',3),
('MK06','Design',3),
('MK07','Olahraga',3);

CREATE TABLE Kontrak (
    Nilai varchar (5) not null,
    Nim varchar (15) not null,
    Id_MataKuliah varchar(15) not null, 
    foreign key (Nim) references Mahasiswa(Nim)
    foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)
);

INSERT INTO Kontrak
VALUES 
('A','1201A','MK01'), 
('A','1201B','MK02'), 
('A','1201C','MK03'),
('B','1201D','MK04'),
('A','1201A','MK02'),
('A','1201A','MK03'),
('A','1201A','MK04'),
('A','1201A','MK05'),
('A','1201A','MK06'),
('A','1201A','MK07'),
('B','1201B','MK04'),
('B','1201B','MK07'),
('C','1201C','MK01'),
('D','1201C','MK02'),
('E','1201C','MK07'),
('A','1201E','MK04');