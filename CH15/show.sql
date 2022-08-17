-- 1 SHOW DATA MAHASISWA DAN JURUSAN
SELECT Mahasiswa.Nama_Mahasiswa, Jurusan.Nama
FROM Mahasiswa
INNER JOIN Jurusan ON Mahasiswa.ID_Jurusan=Jurusan.ID_Jurusan;

-- 2 SHOW DATA UMUR DIBAWAH 20 TAHUN
SELECT * FROM Mahasiswa
WHERE Umur<20;

--3 MAHASISWA MEMILIKI NILAI B KE ATAS
SELECT Mahasiswa.Nama_Mahasiswa, Kontrak.Nilai, Mata_Kuliah.Nama
FROM ((Mahasiswa
INNER JOIN Kontrak ON Mahasiswa.Nim=Kontrak.Nim)
INNER JOIN Mata_Kuliah ON Kontrak.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah)
WHERE Kontrak.Nilai <= 'B';

--4 MAHASISWA DENGAN SKS LEBIH DARI 10
SELECT Mahasiswa.Nama_Mahasiswa, Kontrak.Nim, SUM(Mata_Kuliah.SKS)
FROM ((Mahasiswa
INNER JOIN Kontrak ON Mahasiswa.Nim=Kontrak.Nim)
INNER JOIN Mata_Kuliah ON Mata_Kuliah.Id_MataKuliah=Kontrak.Id_MataKuliah);

--5 MAHASISWA YANG MENGAMBIL DATA MINING
SELECT Mahasiswa.Nama_Mahasiswa, Kontrak.Id_MataKuliah, Mata_Kuliah.Nama
FROM ((Mahasiswa
INNER JOIN Kontrak ON Mahasiswa.Nim=Kontrak.Nim)
INNER JOIN Mata_Kuliah ON Kontrak.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah)
WHERE Mata_Kuliah.Nama='Data Mining';

--6 JUMLAH MAHASISWA UNTUK SETIAP DOSEN 
SELECT COUNT(Mahasiswa.Nim),Kelas.Nim, Kelas.Nip,Dosen.Nama, Dosen.NamaMata_Kuliah
FROM (( Mahasiswa
INNER JOIn Kelas ON Mahasiswa.Nim=Kelas.Nim)
INNER JOIN Dosen ON Dosen.Nip=Kelas.Nip)
GROUP BY Dosen.Nama;

--7 MAHASISWA BERDASARKAN UMUR 
SELECT * FROM Mahasiswa
ORDER BY Umur ASC;

--8 MAHASISWA YANG MEMILIKI KONTRAK MATA KULIAH YANG DIULANG
SELECT Mahasiswa.Nama_Mahasiswa,Kontrak.Nilai, Kontrak.Id_MataKuliah, Mata_Kuliah.Nama, Dosen.Nama, Kelas.Nip
FROM Mahasiswa
INNER JOIN Kontrak ON Mahasiswa.Nim=Kontrak.Nim
INNER JOIN Mata_Kuliah ON Kontrak.Id_MataKuliah=Mata_Kuliah.Id_MataKuliah
INNER JOIN Dosen ON Dosen.Nip=Kelas.Nip
INNER JOIN Kelas ON Mahasiswa.Nim=Kelas.Nim
WHERE Kontrak.Nilai='E' OR Kontrak.Nilai='D';

--9 GABUNGAN MAHASISWA DOSEN DAN JURUSAN
SELECT Mahasiswa.Nama_Mahasiswa, Jurusan.Nama, Kelas.Nip ,Dosen.Nama
FROM Mahasiswa
INNER JOIN Jurusan ON Mahasiswa.ID_Jurusan=Jurusan.ID_Jurusan
INNER JOIN Dosen ON Kelas.Nip=Dosen.Nip
INNER JOIN Kelas ON Mahasiswa.Nim=Kelas.Nim;