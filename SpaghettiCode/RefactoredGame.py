import pygame


     
def main():
    pygame.init()
    screen = pygame.display.set_mode((720, 480))
    player = Player(300,400,0.5)
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
        handle_input(player)
        update_game_state(player)
        draw_game(screen, player)
        pygame.display.flip()


def handle_input(player):
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player.move_left()
    if keys[pygame.K_RIGHT]:
        player.move_right()
    if keys[pygame.K_UP]:
        player.move_up()
    if keys[pygame.K_DOWN]:
        player.move_down()
def update_game_state(player):
    player.update()

def draw_game(screen,player):
    screen.fill((0, 0, 0))
    player.draw(screen)

class Player:
    def __init__(self, x, y, speed):
        self.x = x
        self.y = y
        self.speed = speed
    def move_left(self):
        self.x -= self.speed
    def move_right(self):
        self.x += self.speed
    def move_up(self):
        self.y -= self.speed
    def move_down(self):
        self.y += self.speed
    def update(self):
        pass
    def draw(self,screen):
        pygame.draw.rect(screen, (255, 255, 255), (self.x, self.y, 40, 40))
if __name__ == '__main__':
    main()
