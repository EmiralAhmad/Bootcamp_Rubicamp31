CREATE TABLE Dosen (
    Nip varchar(15) not null primary key,
    Nama varchar(30) not null
);

INSERT INTO Dosen
VALUES 
('X001','Dudung Jamaludin'),
('X002','Abdul Aziz'),
('X003','Muhammad Tazakka'),
('X004','Himawan'),
('X005','Fernanda'),
('X006','Rahmat Fajar'),
('X007','Chairil Anwar');

CREATE TABLE Jurusan ( 
    ID_Jurusan varchar(15) not null primary key,
    Nama varchar(20) not null
);

INSERT INTO Jurusan
VALUES ('12011','Akuntansi'),('12012','Manajemen'),('12013','Ekonomi'),('12014','Bisnis Digital');


CREATE TABLE Mahasiswa (
    Nim varchar(15) not null primary key,
    Nama_Mahasiswa varchar(30) not null,
    Umur int(3) not null,
    Jurusan varchar(15) not null,
    Alamat text,
    ID_Jurusan varchar (15) not null, 
    foreign key (ID_Jurusan) references Jurusan(ID_Jurusan)
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

CREATE TABLE KRS (
    Nilai varchar(5) not null,
    Nip varchar(15) not null,
    Nim varchar(15) not null,
    Id_MataKuliah varchar(15) not null,
    foreign key (Nip) references Dosen(Nip)
    foreign key (Nim) references Mahasiswa(Nim)
    foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)       
);

INSERT INTO KRS
VALUES
('A','X001','1201A','MK01'),
('A','X002','1201B','MK01'),
('A','X002','1201C','MK01'),
('A','X001','1201D','MK01'),
('B','X003','1201A','MK02'),
('B','X003','1201B','MK02'),
('B','X007','1201D','MK03'),
('C','X007','1201E','MK03'),
('C','X005','1201F','MK04'),
('C','X005','1201F','MK03'),
('D','X001','1201F','MK01'),
('D','X003','1201F','MK02'),
('D','X004','1201G','MK05'),
('E','X004','1201B','MK05'),
('E','X006','1201G','MK06'),
('A','X006','1201D','MK06'),
('B','X004','1201B','MK07'),
('A','X004','1201C','MK07'),
('A','X001','1201D','MK01'),
('A','X001','1201D','MK02'),
('A','X001','1201D','MK03'),
('A','X001','1201D','MK04'),
('A','X001','1201D','MK05');
