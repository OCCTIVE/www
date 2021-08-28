library(hexSticker)

imgurl <- here::here("gfx", "dsc-wav_medallion_black.png")
sticker(
  imgurl, package = "",
  s_x = 1.01, s_y = 1, s_width = 0.7,
  h_fill = "#f2f0e6", h_color = "#194593",
  filename = here::here("gfx", "dsc-wav_hex.png")
)
