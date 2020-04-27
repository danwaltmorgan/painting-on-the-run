

const pics = [
  {pic: "https://lh3.googleusercontent.com/bCkK3fwSI3IT6ASBA2wLcsXadEAjimBQERLIVM4KQSNu4gqXnbEcT6WVq-AbtRcU3wYwZN6ZGxRIU-RZvD-2S0VmJoykQ20hMNpn0oPIyk0S-odf45L0rJbB7D9S7TjxrT-FTc0DOg=w2400", alt: "picture of a white house", class: "wide"},
  {pic:"https://lh3.googleusercontent.com/hNi_5NPrclTevsWfJRjfGKCsfsAjAqJJANHKQVwxq4XfVre6B6UELy2hR9xoRa-RzYm6uT1TyakkwVnYeYiqn55Dl1dem4F0m3rOSsP23FJOweP_G8h89s_KUf0Vhlyy3ApO40N2WQ=w2400", alt: "picture of the roof of a house, looking down", class: "wide"},
  {pic: "https://lh3.googleusercontent.com/x2Y-elRsgKC8N-ywbqcduoGqnZsjVVEzVH_kJTMqQTuvfKJ3z0vsDthC4zsRtgWjiMSGQLEn07UHEneBBhnqXY-9tm6Ol-lbVR0YBKlxmufTLoMn3_C8DOQx3NUNKrB21lcTQlfIPA=w2400", alt: "Picture of a brick house from the front", class: "wide"},
  {pic: "https://lh3.googleusercontent.com/a1O3AhqQUEc1R5uo_YwH5xA_rZge0lNijW9MNgWyDvgQijeVX3XfCUgFua4VpqTJB6kyRnSHyCY7SnEOGKzJ479w73P5HodQs58EHVFL8ssuQ2nCePA3hlFfg4k9IupmDPGOoqXFLw=w2400", alt: "picture of a brick house from the back. Most is painted", class: "wide"},
  {pic: "https://lh3.googleusercontent.com/VyoK2nM-BwHnbxHE_9i4PY5u9CN61WYMi47fzrYagIt20f1sBzYTXn-gRy2fStrQ64EeHQ71624z2sZN5eMdd6qaIYR55gesIGgYJ29eg0bb_8QxM56qIIfd_GjgOwHGYSm4zLsBdg=w2400", alt: "Painted bar with splatter on one wall and drips on another", class: "wide"},
  {pic: "https://lh3.googleusercontent.com/84Gql1unv2WbiD8gR8ZmhN_uGmyxrYoXD7M8tn7RiBRa2eP0yEWe0VYWJEpn7rjWqymIY0EahawajjLDlvGOxYeK7EpJjdLuxC1UW3PT5aeEP2-2ifWK-5cl8toxjIJH0wSj15NjtA=w2400", alt: "wall with splattered paint all over it", class: "tall"},
  {pic: "https://lh3.googleusercontent.com/oU-vaxQuCz5SeDFSFtpfoTqnaiE-BfO3Kxjdzy4-hcHcpuk26v6Yw3fydjV7FAgtC-8mclAg-338mHcWlyHD6AJlPsQgyu_SeB5LXysEF0ynWJWWR57KPV-TujizFblBsBUs2x2bnQ=w2400", alt: "paint dripping down a wall in front of a microphone", class: "tall"},
  {pic: "https://lh3.googleusercontent.com/kbr4cFsye3skNHjxofkMdBjAd04SOuBgb364I7hgBAkuqUZs01o8Gxkd6n_xQ1RhGGJ24fJsb-OiEpobsMhI32QLMZZXvyMBv1jdtFI44v9fIicyIZ5zuvlmMjDUqgkjtPKg7NHE6g=w2400", alt: "White room with a fireplace; freshly painted", class: "wide"},

  {pic: "https://lh3.googleusercontent.com/436e4jKqZ5ZcuksQeSmfWH9fOcvQGFPkCNBZ_sn6z95-xkmz9cEe0nuN0sv-FE1VXt4Ppt9AoW_PIINoBxSsmXv8-Yhzp8v00uLljARGHPlpWauEsMSX6S6d8DoScVJ0ehvuX8u6zg=w2400", alt: "Kitchen with freshly painted cabinets", class: "wide"},
  {pic: "https://lh3.googleusercontent.com/KUG4dXInODxgxhEZlwFXznsEIIZqUM-1T55P-ZvmD9dUNbMVG583KtzbPzo0_Rp1xoxSOhbyP1XQBtQ0EMz_en53gk5Bbh-L9f72EGEx4827VB-U4cfDq3Ps00ppydqt2c2XnYfy5A", alt: "Painted bathroom with sink", class: "bathroom"},
  {pic: "https://lh3.googleusercontent.com/pdBiwcNVCfKG84r29_j0rM8rmTN8ESp4VCipkcM_jsPyXNnIxXzuKxsv0QRDsO7nq8dWxM20SI5hSfj0UdXoTEgHHkhgezgCQ7Xq_RBMAIdojJBONhL3tnyzJRt8JMI_z_Xam8manw", alt: "White Painted railing on staircase", class: "tall"},
  {pic: "https://lh3.googleusercontent.com/hretV8vGaUdhFcFbTeZKQZurrQW9BwUlOfEffKRmDTI1t8i20JgGXzPVGWCMStqsZ4fs-_oibIT6yvxQ6a-oe3u8CXmrev6hnzvhjcoiiGNqP9jBoQ9jiqLqymBNClInH9RPlX7m8A", alt: "White freshly painted hallway", class: "hallway"},
  {pic: "https://lh3.googleusercontent.com/GNz-dV3zQCz9rO51JvAkHIirLCopVeJeNV6SksDf_O0Kx4oMAjJWHetlKPjLZMaemrqBw_CKR35o1Zmr8BzhX1socU0oA_xBbbRwz1-c497QET2Y5RAE_rQtNVnnK1EPjs3uDO_wQQ=w2400", alt: "Hardwood floor, light colored", class: "tall"},
  {pic: "https://lh3.googleusercontent.com/qVRqFMDDRBWYbdF43LYJHleeUTF4QKo3gu1apz9vgLyiSNwXLzEGQSyfYjkQLaTovIZ1EKE-usrStINDqYmKGDTl7RjBnjzq4a9yW1ODQUFfAgUDLCdmjLsdrMD-etFfAJCuJX7bcQ=w2400", alt: "Hardwood floor, dark colored", class: "tall"},
  {pic: "https://lh3.googleusercontent.com/qqepzpqylPM3DsNwpNVn37WowHyFtvEnNDvmCvMXEnT3NU_P02TuFXysloQ2rQiwOg-6AxRhsse3FI4mXotgLjinPyWowxWBthyQTNY0MGzXNebv5haBabumvG2dBzjteNZ6nCTYzQ=w2400", alt: "Two screen prints of lady bugs with the yin and yang symbol for their body", class: "tall"}
]

export default pics
