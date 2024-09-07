import pygame

def main():
    pygame.init()
    screen = pygame.display.set_mode((640, 480))
    player_x = 300
    player_y = 400
    player_speed = 0.5
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            player_x -= player_speed
        if keys[pygame.K_RIGHT]:
            player_x += player_speed
        if keys[pygame.K_UP]:
            player_y -= player_speed
        if keys[pygame.K_DOWN]:
            player_y += player_speed
        screen.fill((0, 0, 0))
        pygame.draw.rect(screen, (255, 255, 255), (player_x, player_y, 40, 40))
        pygame.display.flip()

if __name__ == '__main__':
    main()
