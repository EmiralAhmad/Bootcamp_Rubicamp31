-- 1 SHOW DATA MAHASISWA DAN JURUSAN
SELECT Mahasiswa.Nama_Mahasiswa, Jurusan.Nama
FROM Mahasiswa
INNER JOIN Jurusan ON Mahasiswa.ID_Jurusan=Jurusan.ID_Jurusan;

-- 2 SHOW DATA UMUR DIBAWAH 20 TAHUN
SELECT * FROM Mahasiswa
WHERE Umur<20;

--3 MAHASISWA MEMILIKI NILAI B KE ATAS
SELECT Mahasiswa.Nama_Mahasiswa, KRS.Nilai, Mata_Kuliah.Nama
FROM ((Mahasiswa
INNER JOIN KRS ON Mahasiswa.Nim=KRS.Nim)
INNER JOIN Mata_Kuliah ON KRS.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah)
WHERE KRS.Nilai <= 'B';

--4 MAHASISWA DENGAN SKS LEBIH DARI 10
SELECT Mahasiswa.Nama_Mahasiswa, KRS.Id_MataKuliah, SUM(Mata_Kuliah.SKS)
FROM Mahasiswa
INNER JOIN KRS ON Mahasiswa.Nim=KRS.Nim
INNER JOIN Mata_Kuliah ON Mata_Kuliah.Id_MataKuliah=KRS.Id_MataKuliah
WHERE Mata_Kuliah.SKS >= 10;

--5 MAHASISWA YANG MENGAMBIL DATA MINING
SELECT Mahasiswa.Nama_Mahasiswa, KRS.Id_MataKuliah, Mata_Kuliah.Nama
FROM ((Mahasiswa
INNER JOIN KRS ON Mahasiswa.Nim=KRS.Nim)
INNER JOIN Mata_Kuliah ON KRS.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah)
WHERE Mata_Kuliah.Nama='Data Mining';

--6 JUMLAH MAHASISWA UNTUK SETIAP DOSEN 
SELECT Dosen.Nama, KRS.Nip, COUNT(Mahasiswa.Nama_Mahasiswa)
FROM Dosen
INNER JOIN Mahasiswa ON Mahasiswa.Nim=KRS.Nim
INNER JOIN KRS ON Dosen.Nip=KRS.Nip
GROUP BY Dosen.Nama;

--7 MAHASISWA BERDASARKAN UMUR 
SELECT * FROM Mahasiswa
ORDER BY Umur ASC;

--8 MAHASISWA YANG MEMILIKI KONTRAK MATA KULIAH YANG DIULANG
SELECT Mahasiswa.Nama_Mahasiswa, KRS.Nilai, Mata_Kuliah.Nama, Dosen.Nama
FROM Mahasiswa
INNER JOIN KRS ON Mahasiswa.Nim=KRS.Nim
INNER JOIN Mata_Kuliah ON KRS.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah
INNER JOIN Dosen ON Dosen.Nip=KRS.Nip
WHERE KRS.Nilai='E' OR KRS.Nilai='D';

--9 GABUNGAN MAHASISWA DOSEN DAN JURUSAN
SELECT Mahasiswa.Nama_Mahasiswa, Jurusan.Nama, Kelas.Nip ,Dosen.Nama
FROM Mahasiswa
INNER JOIN Jurusan ON Mahasiswa.ID_Jurusan=Jurusan.ID_Jurusan
INNER JOIN Dosen ON Kelas.Nip=Dosen.Nip
INNER JOIN Kelas ON Mahasiswa.Nim=Kelas.Nim;